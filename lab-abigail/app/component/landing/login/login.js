'use strict';

require('./_login.scss');

module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', '$window', 'authService', LoginController],
  controllerAs: 'loginCtrl'
}

function LoginController($log, $location, $window, authService) {
  $log.debug('LoginController');
  this.title = 'Log In';
  if(!$window.localStorage.token) {
            authService.getToken()
            .then(
              () => $location.url('/home'),
              () => $location.url('/signup')
            )
          }

  this.login = function() {
    $log.log('loginCtrl.login()');

    authService.login(this.user).then( () => $location.url('/home'));
  }
}
