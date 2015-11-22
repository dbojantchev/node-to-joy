/**
 * Created by dimit_000 on 11/20/2015.
 */

var sql = require('mssql');

var config = {
    //driver: 'msnodesql',
    debug: true,
    user: 'esp',
    password: 'esp1',
    //server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    server: 'PONTIX2015',
    database: 'ESP',
    options: {
        instanceName: 'SQLEXPRESS'
    }
}

var connection = new sql.Connection(config, function(err) {
    if(err !== null){
        console.log('Connect Error = ' + err);
        return;
    }

    var request = new sql.Request(connection); // or: var request = connection.request();
    //request.query('select 1 as number', function(err, recordset) {
    request.query('select * from Devices', function(err, recordset) {
        if(err === undefined) {
            console.log(recordset);
        } else {
            console.log('Query Error = ' + err);
        }
    });
});

connection.on('error', function(err) {
    console.log('Error accessing database: ' + err);
});