/**
 * Created by dimitar on 2/8/15.
 */

module.exports = Mongo;

function Mongo(){
    var self = this;
    console.log('Initializing Mongo');
    self.MongoClient = require('mongodb').MongoClient;

    self.MongoClient.connect("mongodb://localhost:27017/devices", function(err, db) {
        if (!err) {
            console.log("We are connected");
            self.db = db;

        } else {
            console.log("Connection failed. Exiting...");
            return;
        }
    });
}

Mongo.prototype.getDeviceData = function(cb){
    console.log('Mongo getDeviceData');

    this.db.collection('devices', function(err, collection) {

        var Result = [];
        console.log("devices=" + collection);
        var cursor = collection.find({});
        cursor.each(function(err, deviceObj){
            if(err) {
                return;
            }
            if(deviceObj === null) {
                cb(Result);
            }

            Result.push(deviceObj);
            console.log("deviceObj=" + deviceObj);
        });
    });
};

Mongo.prototype.getDeviceDetail = function(){
    console.log('Mongo getDeviceDetail');
    return {};
};
