'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('edit gallery controller');
      
      this.updateGallery = () => {
        galleryService.updateGallery(this.gallery)
        .then(
          () => $log.log('Successfully updated!'),
          err => $log.error(err)
        );
      };
    };
  }],
};