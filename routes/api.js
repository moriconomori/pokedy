var express = require('express');
var router = express.Router();

// GET /api
router.get('/', function(req, res, next) {
  res.json({
    type: 'api'
  });
});

module.exports = router;
