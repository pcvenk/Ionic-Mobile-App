


var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var session    = require('express-session');
var router     = require('./router');


//setting up Heroku environment
const PORT = 3050;

module.exports = {

    start: function(){

        app.use(bodyParser.urlencoded());
        app.use(bodyParser.json());

        app.use(session({
            genid: function(req) {
                return guid(); // use UUIDs for session IDs
            },
            secret: 'lhdfs903wrodp89wfejo90qcisoj'
        }));

        //todo use the more common syntax like this "app.use('/', express.static(path.join(__dirname, 'app/bookie/www'
        //install the path module and require it at the top
        app.use('/', express.static('app/bookie/www'));
        app.use('/assets', express.static('server/public/assets'));

        app.listen(PORT, function(){

            console.log('Server running on port ' + PORT);

            router(app);

        });


    },
    stop: function(){

    }

};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
