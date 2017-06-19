'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');
    console.log(galleryService);

    this.showEditGallery = false;
    this.deleteGallery = () => {
      galleryService.deleteGallery(this.gallery._id)
      .then(
        res => $log.log(`${res.status}`, 'delete gallery'),
        err => $log.error(err)
      );
    };
  }],
  bindings: {
    gallery: '<',
  },
};
