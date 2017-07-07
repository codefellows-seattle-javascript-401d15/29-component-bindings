'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location) {
    $log.debug('LandingController');
    let url = $location.url();
    this.showSignup = url === '/signup' || url == '/login';
  },
];
