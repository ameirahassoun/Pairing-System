
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/paringSys');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});

const HistorySchema = mongoose.Schema({
    firstStudent:[{ type:String }],
    secondStudent:[{ type:String }]
})

const StudentsSchema = mongoose.Schema({
    studentName : { type: String, index: {unique:true}, required:true },
    studentLevel : { type: Number, required : true},
    pairs:[{type: String}]
})

const History = mongoose.model('History',HistorySchema);
const Students = mongoose.model('Students',StudentsSchema);

module.exports.Students= Students;
module.exports.History = History;