var express = require('express');
var {
  createExam,
  getAllExams,
  getExam,
  deleteExam,
  updateExam,
} = require('../controllers/exam-controller.js')

var router = express.Router();

/* GET all exams. */
router.get('/', getAllExams)

/* GET specific exam. */
router.get('/:patientId', getExam)

/* POST new exam. */
router.post('/admin', createExam)

/* Delete an exam. */
router.delete('/:id', deleteExam)

/* UPDATE new exam. */
router.patch('/:patientId', updateExam)

module.exports = router;
