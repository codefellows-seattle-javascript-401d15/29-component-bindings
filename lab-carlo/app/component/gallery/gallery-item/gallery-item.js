'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');

    this.showEditGallery = false;

    this.deleteGallery = () => {
      galleryService.deleteGallery(this.gallery._id, this.gallery)
      .then(
        (res) => $log.log(`${res.status} deleted the thing`),
        err => $log.error(err)
      );
    };

  }],
  bindings: {
    gallery: '<'
  }
};
