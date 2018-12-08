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
    var student = new Students({
        studentName, studentLevel
    })
    student.save(function (err, data) {
        if (err) {
            console.log("err in creat student", err)
        }
        res.send(data);
    })
})

app.get('/getAllStudents', (req, res) => {
    Students.find({}, function (err, data) {
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