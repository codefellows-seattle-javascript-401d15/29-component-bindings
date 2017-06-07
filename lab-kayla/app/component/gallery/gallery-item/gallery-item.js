'use strict'

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService',
    function($log, galleryService) {
      $log.debug('#Gallery Item Controller')

      this.showEditGallery = false

      this.deleteGallery = () => { //create delete button in html
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
