/**
 * Created by dimit_000 on 11/20/2015.
 */

module.exports = SqlServer;

function SqlServer(database) {

    var sql = require('mssql');

    var config = {
        debug: true,
        user: 'esp',
        password: 'esp1',
        server: 'PONTIX2015',
        database: 'ESP',
        options: {
            instanceName: 'SQLEXPRESS'
        }
    };

    var connection = new sql.Connection(config, function (err) {
        if (err !== null) {
            console.log('Connection Error = ' + err);
            connection = null;
        }
    });

    connection.on('error', function (err) {
        console.log('Error accessing database: ' + err);
        connection = null;
    });

    this.getDeviceData = function(cb) {
        console.log('SqlServer getDeviceData');

        var request = new sql.Request(connection);
        request.query('select * from Devices', function (err, recordset) {
            if (err === undefined) {
                console.log(recordset);
                cb(recordset);
            } else {
                console.log('Query Error = ' + err);
                cb(err);
            }
        });
    };
};