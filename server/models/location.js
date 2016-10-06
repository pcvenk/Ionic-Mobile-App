
var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    image           : {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
    courtInfo       : {
        name        : String,
        city        : String,
        address     : String,
        postalCode  : Number,
        courtNumber : Number,
        timetable   : Number
    }

});

mongoose.model('Location', schema);