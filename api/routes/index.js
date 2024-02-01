var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({mssg: 'Homepage API is working properly!'})
})

/* GET specific item. */
router.get('/:id', function(req, res, next) {
  res.json({mssg: 'GET specific item API is working properly!'})
})

/* POST new item. */
router.post('/', function(req, res, next) {
  res.json({mssg:'POST API is working properly!'})
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
