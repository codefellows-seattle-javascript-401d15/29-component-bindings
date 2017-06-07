// 'use strict';
//
// module.exports = {
//   template: require('./gallery-item.html'),
//   controllerAs: 'deleteGalleryCtrl',
//   bindings: {
//     gallery: '<'
//   },
//   controller: ['$log', 'galleryService', function($log, galleryService) {
//     this.$onInit = () => {
//       $log.debug('Delete Gallery Controller')
//       this.deleteGallery = () => {
//         galleryService.deleteGallery(this.gallery._id, this.gallery)
//         .then(
//           () => $log.log('deleted successfully'),
//           err => $log.error(err)
//         )
//       }
//     }
//   }]
// }
