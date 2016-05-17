(function() {
  'use strict';

  angular.module('people')
  .directive('peopleDir', directive)

  function directive () {
    return {
      templateUrl: '/javascripts/people.dir.html',
      controller: controller,
      controllerAs: 'vm',
    }

    function controller (peopleService, $rootScope) {
      var vm = this;
      activate()
      function activate () {
        peopleService.list().then( function (response) {
          vm.people = response;
        })
      }

    }
  }
}());
