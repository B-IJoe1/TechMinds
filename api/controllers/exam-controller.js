var Exam = require('../models/examModel');
var mongoose = require('mongoose');

//Get all exams
var getAllExams = async(req, res) =>{

  var exams = await Exam.find({}).sort({createdAt: -1}) 

  res.status(200).json(exams)
}

//Get a single exam
var getExam = async(req, res) =>{
  var {patientId} = req.params

  if (!patientId) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  try {
    var exam = await Exam.findOne({patientId}).sort({createdAt: -1});

    if (!exam) {
      return res.status(404).json({ error: 'No exam found for the given patient ID', patientId: req.params.patientId});
    }

  } catch (error) {
    console.error('Error in fetching exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  res.status(200).json(exam)
}

//Post or create a new exam
var createExam = async (req, res) => {
  var {patientId, examId, imageURL, keyFindings, brixiaScore, age, sex, bmi, zipCode} = req.body;

  try {
    var exam = await Exam.create({patientId, examId, imageURL, keyFindings, brixiaScore, age, sex, bmi, zipCode});
    res.status(200).json(exam); // sending the exam object in the response
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

//Delete an exam
var deleteExam = async (req, res) => {
    var {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No exam found'})
      }
    
    var exam = await Exam.findOneAndDelete({_id: id})

    if (!Exam) {
        return res.status(400).json({error: 'No exam found'})
    }
    res.status(200).json(exam)
}

//Update an exam

var updateExam = async(req, res) =>{
  var {patientId} = req.params

  if (!patientId) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  try {
    var exam = await Exam.findOneAndUpdate({patientId},{
      ...req.body})
    if (!exam) {
      return res.status(404).json({ error: 'No exam found for the given patient ID' });
    }

  } catch (error) {
    console.error('Error in fetching exam:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  res.status(200).json(exam)
}
/*
var updateExam = async (req, res) => {
    var {patientId} = req.params

    if(!mongoose.Types.ObjectId.isValid(patientId)){
        return res.status(404).json({error: 'No exam found'})
      }
    var exam = await Exam.findOneAndUpdate({patientId},{
        ...req.body
    })

    if (!Exam) {
        return res.status(400).json({error: 'No exam found'})
    }
    res.status(200).json(exam)
}
*/
module.exports = {
  createExam,
  getAllExams,
  getExam,
  deleteExam,
  updateExam,
};