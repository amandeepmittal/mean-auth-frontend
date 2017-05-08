(function() {
  'use strict';

  angular
    .module('meanAuthFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
