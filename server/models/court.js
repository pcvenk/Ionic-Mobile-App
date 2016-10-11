var mongoose = require('mongoose');

var schema = new Schema('Court')({

    name: String,
    address: String,
    location: String,
    postalCode: Number,
    image: { data: Buffer, contentType: String },
    fulldescription: String,
    courtNumber: [],
    timetable: [],
    favourites: false




});

mongoose.model('Court', schema);
