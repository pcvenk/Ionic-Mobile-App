
//init file
var server = require('./server/server');
var db     = require('./server/database');

var init = function(){

    db.connect(function(){


        require('./server/models/registered-user');

        server.start();

    });

};

init();
