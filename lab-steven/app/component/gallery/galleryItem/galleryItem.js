'use strict';

module.exports = {
  template: require('./galleryItem.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      $log.debug('#galleryItemCtrl');

      this.showEditGallery = false;

    };
  }],
  bindings: {
    gallery: '<',
  },

};
