angular.module('starter').factory('courtService', function($http) {

  var courtService = {

    model:{
      list:[],
      item: null
    },
    getList: function(cb){

      return $http.get('/api/courts')
        .then(function(res){

          var list = res.data;
          courtService.model.list = list;

          if(cb) {
            cb(list);
          }

        });

    },
    update: function(id, data, cb){

      return $http.put('/api/court/'+id,data)
        .then(function(res){

          courtService.model.item = res.data;

          if(cb){
            cb(res.data);
          }
        });
    }
  };

  return courtService;

});
