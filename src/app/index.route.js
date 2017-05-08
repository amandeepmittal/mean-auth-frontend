(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $authProvider) {
    $authProvider.loginUrl = 'http://localhost:3000/api/user/login';
    $authProvider.signupUrl = 'http://localhost:3000/api/user/signup';

    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/');
      }
      return deferred.promise;
    }];

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        resolve: { skipIfLoggedIn: skipIfLoggedIn }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupController',
        resolve: { skipIfLoggedIn: skipIfLoggedIn }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutController'

      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        resolve: { loginRequired: loginRequired }
      })
      .state('edit-profile', {
        url: '/profile/edit',
        templateUrl: 'app/edit-profile/edit-profile.html',
        controller: 'EditProfileController',
        resolve: { loginRequired: loginRequired }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
