'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');
    
    this.showEditGallery = false;
    
    this.deleteGallery = () => {
      galleryService.deleteGallery(this.gallery)
      .then(
        () => $log.log('Successfully deleted!'),
        err => $log.error(err)
      );
    };
  }],
};