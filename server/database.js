

var db = require('mongoose');

exports.connect = function(success){

    db.connect('mongodb://localhost:27017/bookie');

    db.connection.on('error', function(error){

        console.log(error);

    });

    db.connection.once('open', function(){

        if(success){

            success();
        }

        console.log('Database running');

    });

};
