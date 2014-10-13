exports.setup = function setup(app, conf){
    var mysql   = require('mysql')
      , express = require('express')
      , pool    = mysql.createPool({
            host     : conf.db.mysql.host,
            user     : conf.db.mysql.user,
            password : conf.db.mysql.password,
            database : conf.db.mysql.database
        });

   
};

