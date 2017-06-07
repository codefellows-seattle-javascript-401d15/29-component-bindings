'use strict';

require('./_gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('GalleryController');
  this.title = 'Gallery';
  this.subTitle = 'View the gallery';
}
