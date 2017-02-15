var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('onetoone',
    {
      type: 'onetoone',
      attack: 'fire',
      defense: 'water'
    });
});

module.exports = router;
