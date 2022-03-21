const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Mods
app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'teambroo',
        password: '6RIkBSSe',
        server: 'mssql.teambrooksflorida.com', 
        database: 'brookscrm_',
        trustServerCertificate: true, 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT TOP 501 t.* FROM brookscrm_.teambroo.[User] t', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
