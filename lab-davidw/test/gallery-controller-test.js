'use strict';

const expect = require('chai').expect;

describe('testing GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('GalleryController');
      done();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {

    expect(this.galleryCtrl).toBeDefined();
  });

  it('should have a title', () => {

    expect(this.galleryCtrl.title).toBeDefined();
    expect(this.galleryCtrl.title).toEqual(jasmine.any(String));
    expect(this.galleryCtrl.title).toBe('Welcome to Gallery');
  });
});
