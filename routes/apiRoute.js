var express = require('express');
var router = express.Router();

var Mongo  = require('../public/js/mongo/Mongo');
var mongo  = new Mongo();

/* GET device data. */
router.get('/getDeviceData', function(req, res, next) {
  var deviceData = mongo.getDeviceData(function(deviceData){
          console.log('deviceData=' + deviceData);
          res.send(deviceData);
      }
  );
  //res.send(mongo.getDeviceData());
});

/* GET device detail. */
router.get('/getDeviceDetail', function(req, res, next) {
    res.send(mongo.getDeviceDetail());
});

module.exports = router;
