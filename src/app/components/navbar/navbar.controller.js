(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  }
})();
