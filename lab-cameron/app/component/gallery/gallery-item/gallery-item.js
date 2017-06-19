'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: [
    '$log',
    'galleryService',
    GalleryItemController,
  ],
  bindings: {
    gallery: '<',
  },
};

function GalleryItemController($log, galleryService) {
  $log.debug('#GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = () => {
    galleryService.deleteGallery(this.gallery._id)
    .then(
      res => $log.log(`${res.status}, gallery deleted`),
      err => $log.error(err)
    );
  };
}
