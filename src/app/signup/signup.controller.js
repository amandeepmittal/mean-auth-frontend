(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($scope, $location, $auth) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $location.path('/profile');
        });
    };
  }
})();
