'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService) {

      this.gallery = {};

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then((res) => $log.log(`${res.status}, delete successful`),
          err => $log.error(err)
        );
      };

      this.editGallery = () => {



        galleryService.updateGallery(this.gallery, this.gallery._id)
        .then((res) =>  {
          console.log(res);
          $log.log(`${res.status}, update successful`);
        });
      };

    }],
  bindings: {
    gallery: '<',
  },
};
