'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', '$rootScope', '$galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {
      $log.debug('gallery item controller');

      this.showEditGallery = false;

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then(() => {
          $log.log('Succesfully deleted.');
        })
        .catch(err => {
          $log.error(err);
        });
      };
    };
  }],
};
