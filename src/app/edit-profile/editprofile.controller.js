(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .controller('EditProfileController', EditProfileController);

  /** @ngInject */
  function EditProfileController($scope, $http, $state) {
    var API_URL = 'http://localhost:3000/';

    $http.get(API_URL + 'api/user/profile')
      .success(function (data) {
        $scope.user = data.user;
      });

    $scope.editProfile = function () {
      var data = {
        name: $scope.user.name,
        city: $scope.user.location.city,
        country: $scope.user.location.country,
        website: $scope.user.profile.website
      }
      $http.put(API_URL + 'api/user/profile', data)
        .success(function (data) {
          $state.reload();
        });
    };
  }
})();
