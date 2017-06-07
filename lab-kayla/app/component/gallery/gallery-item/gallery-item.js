'use strict'

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService',
    function deleteGallery($log, galleryService) {
      $log.debug('#Gallery Item Controller')

      this.showEditGallery = false

      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
        .then(
          res => $log.log(`${res.status}, gallery deleted`),
          err => $log.error(err)
        )
      }
    }],

  bindings: {
    gallery: '<'
  }
}
