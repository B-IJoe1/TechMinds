var Exam = require('../models/examModel');
var mongoose = require('mongoose');


const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}

module.exports = {
  getUser,
};
