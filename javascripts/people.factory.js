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
      // del: del,
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
        people.push(response.data)
        return people
      })
    }

    // function del (id) {
    //   console.log(id);
    //   return $http.delete('http://localhost:3000/api/posts/' + id)
    //   .then( function (resoponce) {
    //     var data = resoponce.data[0]
    //     if (resoponce.status === 200) {
    //       for (var i = 0; i < posts.length; i++) {
    //         if (posts[i].post_id == data.post_id) {
    //           posts.splice(i, 1);
    //           return posts
    //         }
    //       }
    //     }
    //   })
    // }
  }
}());
