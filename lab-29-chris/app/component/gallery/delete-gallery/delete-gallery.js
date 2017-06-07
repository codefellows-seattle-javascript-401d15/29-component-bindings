'use strict';

module.exports = {
  template: require('./delete-gallery.html'),
  controllerAs: 'deleteGalleryCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {
      $log.debug('Delete Gallery Controller');

      this.showDeleteGallery = false;

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id, this.gallery)
        .then(
          () => $log.log('deleted successfully'),
          err => $log.error(err)
        );
      };
    };
  }],
};
