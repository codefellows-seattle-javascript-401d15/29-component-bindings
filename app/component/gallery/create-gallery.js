'use strict';

module.exports = {
  template: require('./create-gallery.html'),
  controllerAs: 'createGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      return galleryService.createGallery(this.gallery)
      .then(() => {
        let res = this.gallery;
        this.gallery.name = null;
        this.gallery.desc = null;
        return res;
      })
      .catch(err => $log.error(err));
    };
  }]
};
