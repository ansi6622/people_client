(function() {
  'use strict';

  angular.module('people')
  .directive('people', directive)

  function directive () {
    return {
      templateUrl: '/javascripts/people/people.dir.html',
      controller: controller,
      controllerAs: 'vm',
    }

    function controller (peopleService, $rootScope) {
      var person = {};
      var vm = this;
      vm.person= {}
      vm.sendIt = sendIt
      vm.deletes = deletes
      activate()
      function activate () {
        peopleService.list().then( function (response) {
          vm.people = response.peeps;
        })
      }
      function sendIt (data) {
        peopleService.add(data).then(function(response){
          vm.people.push(response);
          return vm.people;
        })
      }
      function deletes (id){
        peopleService.del(id).then(function(response){
          console.log("this is the delete response hopefully data, ie an ID", response);
            for (var i = 0; i < vm.people.length; i++) {
              if (vm.people[i].id == response) {
                vm.people.splice(i, 1);
                return vm.people;
              }
            }
        })
      }
    }
    }
}());
