'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    SignupController,
  ],
  controllerAs: 'signupCtrl',
};

function SignupController($log, $location, $window, authService) {
  $log.debug('SignupController');

  this.title = 'Enter your information';

  if($window.localStorage.token) {
    authService.getToken()
    .then(() => $location.url('/home'));
  }

  this.signup = function(user) {
    $log.debug('signupCtrl.signup()');

    return authService.signup(user)
    .then(() => $location.url('/home'));
  };
}
