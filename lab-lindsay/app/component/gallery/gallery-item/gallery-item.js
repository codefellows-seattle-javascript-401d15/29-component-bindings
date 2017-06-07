'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');

    this.showEditGallery = false;
    this.$onInit = () => {
      $log.debug('Delete Gallery Item')
      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id, this.gallery)
        .then(
          ()
        )
      }

    }

  }],
  bindings: {
    gallery: '<'
  }
};
