'use strict';

require('./_logout.scss');

module.exports = {
  template: require('./logout.html'),
  controllerAs: 'logoutCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    function ($log, $location, $window, authService) {
      $log.debug('LogoutController');

      this.title = 'Are you sure you want to logout?';

      this.logout = function() {
        $log.debug('logoutCtrl.logout()');

        return authService.logout()
        .then(() => $location.url('/home'))
        .catch(err => $log.error(err));
      };
    },
  ],
};
