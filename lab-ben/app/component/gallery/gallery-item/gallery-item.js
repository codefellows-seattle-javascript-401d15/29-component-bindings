'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('Gallery Item Controller');

      this.showEditGallery = false;

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id);
      };
    };
  }],
  bindings : {
    gallery: '<',
  },
};
