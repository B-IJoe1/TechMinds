var mongoose = require('mongoose')
var schema = mongoose.Schema

var examSchema = new schema({
    patientId: {
        type: String,
        required: true
    },
    examId: {
        type: String,
        required: true
    },
    imageURL:{
        type: String,
    },
    keyFindings: {
        type: String,
        required: true
    },
    brixiaScore: {
        type: Number,

    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }

},{ timestamps: true})

module.exports = mongoose.model('Exam', examSchema)
