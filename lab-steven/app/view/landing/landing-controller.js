'use strict';

module.exports = ['$log', '$location', '$rootScope',
  function($log, $location, $rootScope) {
    this.$onInit(() => {

      $log.debug('LandingController');

      let url = $location.url();
      this.showSignup = url === '/join#signup' || url === '/join';
    
      this.title = 'Landing Title';
    });
  }];
