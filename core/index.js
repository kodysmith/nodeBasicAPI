exports.init = function init(){
    var router  = require('./router')
        , middleware  = require('./middleware')
        , express = require('express')
        , app     = express()
        , conf    = require('./conf').get('development')
        , crypto  = require('crypto')
    

    middleware.setup(app, conf);
    router.run(app, conf.application.routes);

    app.listen(conf.server.port);
    console.log('node-rest-demo pid %s listening on %d in %s',process.pid,conf.server.port,process.env.NODE_ENV);
};