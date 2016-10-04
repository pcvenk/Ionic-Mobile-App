
var mongoose = require('mongoose');

var schema =  new mongoose.Schema({

    email       : {type: String, unique: true},
    password    : String,
    dateCreated : {type: Date, default: Date.now}

});

mongoose.model('RegisteredUser', schema);

