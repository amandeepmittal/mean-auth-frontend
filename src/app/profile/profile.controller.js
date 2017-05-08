(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($scope, $http) {
    var API_URL = 'http://localhost:3000/';

    $http.get(API_URL + 'api/user/profile')
      .success(function (data) {
        $scope.user = data.user;
      });

  }
})();
