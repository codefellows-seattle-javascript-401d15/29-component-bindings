'use strict';

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: [
    '$log',
    '$location',
    'authService',
    function($log, $location, authService) {
      $log.debug('#signupController');

      this.signup = function() {
        $log.debug('#signupCtrl.signup');
        return authService.signup(this.user)
        .then(() => $location.url('./home'));
      };
    },
  ],
};
