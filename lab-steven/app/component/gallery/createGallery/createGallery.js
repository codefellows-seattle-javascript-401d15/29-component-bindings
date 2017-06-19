'use strict';

module.exports = {
  template: require('./createGallery.html'),
  controllerAs: 'createGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      $log.debug('Create Gallery Controller');
      this.gallery = {};

      this.createGallery = () => {
        return galleryService.createGallery(this.gallery)
        .then(() => {
          let res = this.gallery;
          this.gallery.name = null;
          this.gallery.desc = null;
          return res;
        })
        .catch(err => $log.error(err));
      };

    };
  }],

};
