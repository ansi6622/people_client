(function() {
  'use strict';

  factory.$inject = ['$http'];

  angular.module('people')
  .factory('peopleService', factory)

  function factory ($http) {
    var people = []
    return {
      list: listPeople,
      add: addPeople,
      del: del,
    }

    function listPeople () {
      return $http.get('http://localhost:3000/api/v1/list')
      .then( function (response) {
        people = response.data;
        return people
      })
    }

    function addPeople (data) {
      return $http.post('http://localhost:3000/api/v1/list', data)
      .then( function (response) {
        // vm.people.push(response.data.peeps[0]);
        return response.data.peeps[0]
      })
    }

    function del (id) {
      console.log(id);
      return $http.delete('http://localhost:3000/api/v1/list/' + id)
      .then( function (response) {
        var data = response.data.person[0]
        return data;
      })
    }

    function update (data) {
      console.log("id", data.id);
      return $http.post('http://localhost:3000/api/v1/list/' + data.id, data)
      .then( function (response) {
        var data = response.data.person[0]
        return data;
      })
    }
  }
}());
