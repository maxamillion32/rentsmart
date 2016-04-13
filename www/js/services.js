angular.module('mapnet.services', []).value('SOCKET_URL','http://gokyr.com/wp-json/wp/v2/')

  .factory('RestServe', ['$http', 'SOCKET_URL', function($http, SOCKET_URL) {
    return{

      cars: function() {
        return $http.get(SOCKET_URL + '/cars/', {
          headers: {
            'Content-Type' : 'application/json'
          }
        });
      },

      getCar: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getFuel: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/fuel', {
          headers: {
            'Content-Type' : 'application/json'
          }
        });
      },

      getDoor: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/door', {
          headers: {
            'Content-Type':'application/json'
          }
        });
      },

      getBattery: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/battery', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getTrunk: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/trunk', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getOdometer: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/odometer', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getLocation: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/location/', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getLastTrip: function(id) {
        return $http.get(SOCKET_URL + '/cars/' + id + '/battery', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      sendAddress: function(vin, addrObj) {
        return $http.post(SOCKET_URL + '/cars/' + vin + '/navigation/', addrObj, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      turnOnHeadlights: function(id) {
        return $http.post(SOCKET_URL + '/cars/' + id + '/lights/');
      },

      lockCar: function(id) {
        return $http.post(SOCKET_URL + '/cars/' + id + '/lock/', {"key":"bryan2015"}, {
          headers: {
            'content-type':'application/json'
          }
        });
      },

      honkHorn: function(id) {
        return $http({
          method: 'POST',
          url: SOCKET_URL + '/cars/' + id + '/horn/',
          data: {"key": "bryan2015", "count":2},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          }
        });
      }

    }
  }]).factory('$localstorage', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }
    }
  }]);

