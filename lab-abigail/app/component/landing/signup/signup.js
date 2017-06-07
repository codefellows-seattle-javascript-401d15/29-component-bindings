'use strict'

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', '$window', 'authService', SignupController],
  controllerAs: 'signupCtrl',
}

function SignupController($log, $location, $window, authService) {
  this.$onInit = () => {
    this.title = 'Sign up';
    $log.debug('SignupController');
    $log.log('inside SignupController')
    if(!$window.localStorage.token) {
              authService.getToken()
              .then(
                () => $location.url('/home'),
                () => $location.url('/signup')
              )
            }
    // authService.getToken().then(() => $location.url('/home'))

    this.signup = function(user) {
      $log.debug('signupCtrl.signup()');

      authService.signup(user).then(() => $location.url('/home'));
    }
  }
}
