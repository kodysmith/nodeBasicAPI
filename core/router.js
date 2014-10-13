exports.run = function route(app, routes){
    var handlers = {};

    routes.forEach(function(val){
        handlers[val] = require('../routes/'+val);
       
        app.get('/'+val, handlers[val].get);
        app.get('/'+val+'/:id', handlers[val].find);
        app.post('/'+val, handlers[val].ins);
        app.put('/'+val+'/:id', handlers[val].upd);
        app.delete('/'+val+'/:id', handlers[val].del);
    });
};
