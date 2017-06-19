'use strict';

require('./_create-gallery.scss');

module.exports = {
  template: require('./create-gallery.html'),
  controllerAs: 'createGalleryCtrl',
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService){
      this.$onInit = () => {
        $log.debug('Create Gallery Controller');
        this.gallery = {};

        this.createGallery = () => {
          console.log('WE ARE HERE IN CREATE GALLERY');
          return galleryService.createGallery(this.gallery)
          .then(() => {
            let res = this.gallery;
            this.gallery.name = null;
            this.gallery.desc = null;
            return res;
          },
          err => {
            $log.log(err);
          });
        };
      };
    }]
};
