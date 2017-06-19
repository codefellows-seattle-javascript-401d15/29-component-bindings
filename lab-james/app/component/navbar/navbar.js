'use strict';

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: ['$log', '$rootScope', 'authService', '$location', function($log, $location, $rootScope, authService) {
    this.$onInit = () => {
      $log.debug('navbar controller');

      this.checkPath = () => {
        let path = $location.path;
        if(path === '/join') {
          this.hideButtons = true;
        }

        if(path !== '/join') {
          this.hideButtons = false;
          authService.getToken()
          .catch(() => {
            $location.url('/join#login');
          });
        }
      };

      this.logout = function() {
        this.hideButtons = true;
        authService.logout()
        .then(() => {
          $location.url('/');
        });
      };
    };
  }],
};
