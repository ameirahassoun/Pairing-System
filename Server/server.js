const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Students = require('./db/index').Students;
const History = require('./db/index').History;

app.use(express.static(path.join(__dirname, '../system/build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/addStudent', (req, res) => {
    const { studentName, studentLevel} = req.body;
    let student = new Students({
        studentName, studentLevel
    })
    student.save( (err, data) => {
        if (err) {
            console.log("err in creat student", err)
        }
        res.send(data);
    })
})

app.get('/getAllStudents', (req, res) => {
    Students.find({}, (err, data)=>  {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.put('/editlevel', (req, res) => {
    const { id, newLevel } = req.body;

    Students.findById(id, (err, student) => {
        if (err) throw err ;
        student.studentLevel = newLevel;
        student.save((err, student) => {
            if (err) throw err
            res.send(student);
        });
    });
})

app.put('/editpair', (req, res) => {
    let pairsarray=[];
    let obj = req.body;
        for (let key in obj) {
            pairsarray.push(obj[key])
        }       

    pairsarray.forEach((name) => {
        Students.findOneAndUpdate({studentName:name[0]},{$push:{pairs:name[1]}}, 
             (err, student) =>  {
        if (err) console.log(err)
            console.log(student);
        });
    });
    res.send('ok');
})

app.delete('/deletestudent', (req, res) => {
    console.log(req.body)
    const { _id } = req.body;
  Students.findOneAndRemove({_id: _id}, function (err,data) {
    if (err){
        console.log("err in deleting Student");
        throw err;
    }
    res.send("deleting student sucssfully", data);
  })
})

app.post('/addHistory', (req, res) => {
    const { firstStudentsArray , secondStudentsArray } = req.body;
    var history = new History({
        firstStudent: firstStudentsArray,
        secondStudent: secondStudentsArray,
    })
    history.save(function (err, data) {
        if (err) {
            console.log("errr in creat student", err)
        }
        console.log(data)
        res.send(data);
    })
})

app.get('/gethistory', (req, res) => {
    History.find({}, function (err, data) {
        if (err) {
            console.log("err in show all student");
        }
        res.send(data);
    })
})

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../system/build/index.html')))
});

const PORT = process.env.PORT || 3200;

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}

module.exports = app;