var express = require('express');
var router = express.Router();
var xray = require("x-ray");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/refresh', function(){

    var x = new xray();

  x('http://www.horsegoeswest.com/scrapetest/scrapetest.html', {
    title: 'title',
    items: x('.coluna', [{
      matt: 'h1',
      items: x('.luta', [{
        time: '.day',
        fighter1: '.nome1',
        fighter2: '.nome2'
      }])
    }])
  }).write('results.json');

  console.log('refreshed');

});


module.exports = router;
