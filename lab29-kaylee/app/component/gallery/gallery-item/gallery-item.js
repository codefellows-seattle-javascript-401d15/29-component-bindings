'use strict'

require('./_gallery-item.scss')

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('GalleryItemController')

      this.showEditGallery = false;

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery)
        .then(() => {
          $log.log('Gallery deleted')
        })
        .catch(err => $log.error(err))
      }
    }
  }]
}
