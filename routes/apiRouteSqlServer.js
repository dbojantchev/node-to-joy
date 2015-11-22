var express = require('express');
var router = express.Router();

var sqlServer         = require('../public/js/SqlServer/SqlServer');
var sqlServerDevices  = new sqlServer('devices');
var sqlServerSchool   = new sqlServer('school');

/* GET device data. */
router.get('/getDeviceData', function(req, res, next) {
  var deviceData = sqlServerDevices.getDeviceData(function(deviceData){
          console.log('deviceData=' + deviceData);
          res.send(deviceData);
      }
  );
});

/* GET device detail. */
router.get('/getDeviceDetail', function(req, res, next) {
    res.send(sqlServer.getDeviceDetail());
});

module.exports = router;
