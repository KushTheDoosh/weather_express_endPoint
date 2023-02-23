var express = require('express');
var router = express.Router();
const  weatherControllerr = require('../weatherController/weatherControllers.js'); 

/* GET weather listing. */
router.get('/', function(req, res, next) {
  weatherControllerr.weather_list(req, res); 
});

module.exports = router;
