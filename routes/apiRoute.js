var express = require('express');
var router = express.Router();

var Mongo  = require('../public/js/mongo/Mongo');
var mongoDevices  = new Mongo('devices');
var mongoSchool   = new Mongo('school');

/* GET device data. */
router.get('/getDeviceData', function(req, res, next) {
  var deviceData = mongoDevices.getDeviceData(function(deviceData){
          console.log('deviceData=' + deviceData);
          res.send(deviceData);
      }
  );
});

/* GET students. */
router.get('/getStudents', function(req, res, next) {
    var students = mongoSchool.getCollection('students', function(students){
            console.log('classses=' + students);
            res.send(students);
        }
    );
});

/* GET classes. */
router.get('/getClasses', function(req, res, next) {
    var classes = mongoSchool.getCollection('classes', function(classes){
            console.log('classses=' + classes);
            res.send(classes);
        }
    );
});

/* GET device detail. */
router.get('/getDeviceDetail', function(req, res, next) {
    res.send(mongo.getDeviceDetail());
});

module.exports = router;
