'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'galleryService',
  function($log, $rootScope, $window, $location, authService, galleryService) {
    $log.debug('GalleryController');
    if(!$window.localStorage.token) {
      authService.getToken()
      .then(
        () => $location.url('home'),
        () => $location.url('signup')
      );
    }
    this.$onInit = () => {
      this.title = 'This is where the pictures go';

      this.galleries = [];

      this.fetchGalleries = () => {
        return galleryService.fetchGalleries()
        .then(galleries => this.galleries = galleries)
        .catch(err => $log.error(err));
      };

      $rootScope.$on('locationChangeSuccess', this.fetchGalleries);
      this.fetchGalleries();
    };
  }];
