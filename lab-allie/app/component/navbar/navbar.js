'use strict';

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: ['$log', '$location', '$rootScope', 'authService', 
    function($log, $location, $rootScope, authService) {
      this.$onInit = () => {
        $log.debug('NavbarController');
        
        this.checkPath = function() {
          let path = $location.path();
          if(path === '/join') this.hideButtons = true;
          
          if(path !== '/join') {
            this.hideButtons = false;
            authService.getToken()
            .catch(() => {
              $location.url('/join#login');
            });
          }
        };
      };
    },
  ],
};