'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    $log.debug('Gallery Item Controller');

    this.showEditGallery = false;

  }],
  bindings: {
    gallery: '<',
  },
};
