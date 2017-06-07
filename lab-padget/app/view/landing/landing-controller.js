'use strict';

require('./_landing.scss');

// module.exports = ['$log', '$location', '$rootScope', 'authService', LandingController];
//
// function LandingController($log, $location, authService) {
//   $log.debug('LandingController');
//   this.title = 'Signup';
//   this.subTitle = 'Please signup here';
//
//   // authService is not yet used
//   console.log(authService);
//
//   let url = $location.url();
//   this.showSignup = url === '/join#signup' || url === '/join';
// }

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  'authService',
  function($log, $location, authService) {
    this.$onInit = () => {
      let url = $location.url();
      $log.log('url', url);
      this.showSignup = url === '/join#signup' || url === '/join';
    };
  },
];
