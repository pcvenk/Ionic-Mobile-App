
var mongoose = require('mongoose');
var bcrypt  = require('bcrypt');

module.exports = function(app){

    // API routes

    // app.get('/api/users', function(req, res){
    //
    //     var User = mongoose.model('User');
    //
    //     User.find(function(err, docs){
    //
    //         if(!err){
    //             res.send(docs);
    //         }else{
    //             console.log(err);
    //         }
    //
    //     });
    //
    // });
    //
    // app.post('/api/user', function(req, res){
    //
    //     var User = mongoose.model('User');
    //
    //     var user = new User(req.body);
    //
    //     user.save(function(err, docs){
    //
    //         if(!err){
    //             res.status(200).send(docs);
    //         }else{
    //             res.send(err);
    //         }
    //
    //     });
    //
    // });

    // var myHash;
    //
    // app.post('/api/login', function(req, res){
    //
    //     var data = req.body;
    //     var email = data.email;
    //     var password = data.password;
    //
    //     bcrypt.compare(password, myHash, function(err, _res) {
    //
    //         res.send(_res);
    //     });
    //
    // });
    //
    // var myHash;
    // app.post('/api/register', function(req, res){
    //
    //     var data = req.body;
    //     var email = data.email;
    //     var password = data.password;
    //
    //     bcrypt.genSalt(10, function(err, salt) {
    //         bcrypt.hash(password, salt, function(err, hash) {
    //             // Store hash in your password DB.
    //
    //             myHash = hash;
    //             data.password = hash;
    //             res.send(data);
    //
    //
    //         });
    //     });
    //
    // });

    app.post('/api/register', function(req, res){

        var data = req.body;

        var password = data.password;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {


                data.password = hash;
                res.send()
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

    app.get('/api/login-status', function(req, res){

        if(req.session.user){
            //res.sendStatus(200);
            res.send(req.session.user);
        }else{
            res.sendStatus(401);
        }

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



};
