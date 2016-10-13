
var mongoose = require('mongoose');
var bcrypt  = require('bcrypt');

module.exports = function(app){

    // API routes

    app.get('/api/courts', function(req, res){

        var Court = mongoose.model('Court');

        Court.find(function(err, docs){

            if(!err){
                res.send(docs);
            }else{
                console.log(err);
            }

        });

    });

    app.put('/api/court/:id', function(req, res){

        var courtData = req.body;
        var courtId   = req.params.id;

        var Court = mongoose.model('Court');

        Court.findByIdAndUpdate(courtId, courtData, { 'new': true}, function(err, doc){

            if(!err){
                res.send(doc);
            }else{
                res.status(400).send(err);
            }
        })

    });

    app.post('/api/register', function(req, res){

        var data = req.body;

        var password = data.password;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {


                data.password = hash;

                var userDoc = {
                    email       : data.email,
                    password    : hash
                };

                var RegisteredUser = mongoose.model('RegisteredUser');
                var registeredUser = new RegisteredUser(userDoc);
                registeredUser.save(function(err){

                    if(!err) {
                        res.send(registeredUser);
                    }else{
                        console.log(err);
                        res.sendStatus(400);
                    }

                });

            });

        });

    });

    app.post('/api/login', function(req, res){

        var data = req.body;

        var email = data.email;
        var password = data.password;

        var RegisteredUser = mongoose.model('RegisteredUser');
        RegisteredUser.findOne({ email : email }, function(err, userDoc){
            // compare the plain text password sent from the browser
            // with the hashed password stored in the database
            // belonging to this user (email)
            bcrypt.compare(password, userDoc.password, function(err, match) {

                if(match === true){

                    var hour = 3600000;
                    req.session.cookie.expires = new Date(Date.now() + 150*hour);
                    req.session.cookie.maxAge = hour;
                    userDoc.password = null;
                    req.session.user = userDoc;
                    res.send(userDoc);

                }else{
                    res.sendStatus(401);
                }

            });

        });

    });

    app.post('/api/logout', function(req, res){

        req.session.destroy(function(err){

           if(!err){
               res.sendStatus(200);
           }else{
               console.log(err);
               res.sendStatus(400);
           }

        });

    });

    app.post('/api/login-status', function(req, res){

        if(req.session.user){
            res.send(req.session.user);
        }else{
            res.sendStatus(401);
        }

    });




};
