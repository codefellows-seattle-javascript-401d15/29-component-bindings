'use strict';

require('./navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: [
    '$log',
    '$location',
    'authService',
    function($log, $location, authService) {
      this.$onInit = () => {
        $log.debug('NavBarController');


        this.logout = function() {
          $log.log('successfully signed out');
          return authService.logout()
          .then(() => $location.url('/join'));
        };


      };
    }],
};
