'use-strict'

module.exports = {
  template: require('./del-gallery.html'),
  controllerAs: 'delGalleryCtrl',
  bindings: {
    gallery:'<'
  },
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      $log.debug('Delete Gallery Controller')
      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id)
          .then(
            () => $log.log('successfully deleted'),
            err => $log.error(err)
          )
      }
    }
  }]
}
