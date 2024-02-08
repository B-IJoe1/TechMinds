var mongoose = require('mongoose')
var schema = mongoose.Schema

var examSchema = new schema({
    PatientID: {
        type: String,
        required: true
    },
    ExamID: {
        type: String,
        required: true
    },
    Image:{
        type: String,
    },
    KeyFindings: {
        type: String,
        required: true
    },
    BrixiaScore: {
        type: Number,

    },
    Age: {
        type: Number,
        required: true
    },
    Sex: {
        type: String,
        required: true
    },
    BMI: {
        type: Number,
        required: true
    },
    ZipCode: {
        type: Number,
        required: true
    }

},{ timestamps: true})

module.exports = mongoose.model('Exam', examSchema)
