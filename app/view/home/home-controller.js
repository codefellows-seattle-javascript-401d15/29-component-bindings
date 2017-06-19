'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'galleryService',
  HomeController];

function HomeController($log, $rootScope, $window, $location, authService, galleryService) {
  this.$onInit = () => {
    $log.debug('HomeController()');
    this.galleries = [];

    this.logout = function() {
      $log.log('You have been to the doing of the signing out.');
      authService.logout()
      .then(
        () => $location.url('/join'));
    };

    this.fetchGalleries = () => {
      return galleryService.fetchGalleries()
      .then(galleries => this.galleries = galleries)
      .catch(err => $log.error(err));
    };

    $rootScope.$on('locationChangeSuccess', this.fetchGalleries);
    this.fetchGalleries();
  };
}
