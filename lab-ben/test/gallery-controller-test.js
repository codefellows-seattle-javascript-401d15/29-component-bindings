'use strict';
require('./lib/test-setup');

const angular = require('angular');
// require('angular-mocks');

describe('testing GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      // this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });

  // afterEach(() => this.$rootScope.$apply());

  it('should have a initial properties', () => {
    expect(this.galleryCtrl.title).toEqual('This is where the pictures go');
  });
});
