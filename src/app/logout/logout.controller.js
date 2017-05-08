(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($location, $auth) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        $location.path('/login');
      });
  }
})();
