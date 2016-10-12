var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    address: String,
    location: String,
    postalCode: Number,
    image: String,
    fulldescription: String,
    courtNumber: [],
    timetable: [],
    favourites: false

});

mongoose.model('Court', schema);
