angular.module('starter').factory('authService',function($http) {

  var auth = {

    model: {
      user:null
    },
    registerUser:function(user, cb){

      $http.post('/api/register', user)
        .then(function(res){

          if(cb){
            cb(res);
            console.log(res.data);
          }

        });

    },
    loginUser:function(user, cb){

      $http.post('/api/login', user)
        .then(function(res){

          if(cb){
            cb(res);
          }

        });

    },
    loginStatus:function(){

      return $http.get('/api/login-status');


    },
    logOut:function(cb){

      $http.post('/api/logout', {})
        .then(function(res){

          if(cb){
            cb();
          }

        });

    }



  };

  return auth;
});

