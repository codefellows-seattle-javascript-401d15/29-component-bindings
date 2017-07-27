'use strict'

require('./_edit-gallery.scss')

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  },
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('EditGalleryController')
      this.updateGallery = () => {
        galleryService.updateGallery(this.gallery)
        .then(() => {
          $log.log('Gallery updated')
        })
        .catch(err => $log.error(err))
      }
    }
  }]
}
