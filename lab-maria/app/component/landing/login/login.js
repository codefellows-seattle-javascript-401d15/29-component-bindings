'use strct';

module.exports = {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: [
    '$log',
    '$location',
    'authService',
    function($log, $location, authService) {
      $log.debug('#loginController');
      this.login = function() {
        $log.debug('loginCtrl.login');
        console.log(this.user);
        authService.login(this.user)
        .then(() => $location.url('/home'));
      };
    },
  ],
};
