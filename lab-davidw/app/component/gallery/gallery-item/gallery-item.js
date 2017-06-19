'use strict';

//require('_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService) {
      this.$onInit = () => {
        $log.debug('Gallery Item Controller');

        this.showEditGallery = false;
        this.deleteGallery = () => {
          return galleryService.deleteGallery(this.gallery._id)
          .then(
            () => $log.log('deleted gallery succesfully'),
            err => $log.error(err)
          );
        };
      };
    },
  ],
};
