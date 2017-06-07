'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('Edit Gallery Controller');

      this.updateGallery = () => {
        galleryService.updateGallery(this.gallery._id, this.gallery)
        .then(
          () => $log.log('updated successfully'),
          err => $log.error(err)
        );
      };

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then(
          () => $log.log('deleted successfully'),
          err => $log.error(err)
        );
      };
    };
  }],
};
