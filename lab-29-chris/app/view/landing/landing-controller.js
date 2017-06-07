'use strict';

require('./_landing.scss');

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  'authService',
  function($log, $location, $rootScope, authService) {
    let url = $location.url();
    this.title = 'Landing Controller';

    this.showSignup = url === '/join#signup' || url === '/join';
  },
];
