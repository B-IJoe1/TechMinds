var express = require('express');
var router = express.Router();
var Exam = require('../models/examModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({mssg: 'Homepage API is working properly!'})
})

/* GET specific item. */
router.get('/:id', function(req, res, next) {
  res.json({mssg: 'GET specific item API is working properly!'})
})

/* POST new item. */
router.post('/', async (req, res, next) => {
  var{PatientID, ExamID, Image, KeyFindings, BrixiaScore, Age, Sex, BMI, ZipCode} = req.body

  try{
    var exam = await Exam.create({PatientID, ExamID, Image, KeyFindings, BrixiaScore, Age, Sex, BMI, ZipCode})
    res.status(200).json(exam)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
})

/* Delete an item. */
router.delete('/:id', function(req, res, next) {
  res.json({mssg:'DELETE API is working properly!'})
})

/* UPDATE new item. */
router.patch('/:id', function(req, res, next) {
  res.json({mssg:'UPDATE API is working properly!'})
})

module.exports = router;
