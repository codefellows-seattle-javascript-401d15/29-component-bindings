'use strict';

const expect = require('chai').expect;

describe('Gallery Item Component', function() {
  beforeEach(done => {
    angular.mock.module('slugram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.galleryItemCtrl = $componentController('galleryItem');
      done();
    });
  });
  beforeEach(done => {
    this.$window.localStorage.setItem('token', 'test token');
    done();
  });
  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    done();
  });

  describe('#galleryItemCtrl.deleteGallery', () => {
    it('should make a valid DELETE request for the desired gallery', done => {
      let expectUrl = 'http://localhost:3000/api/gallery/:id';
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`,
      };
      let expectGallery = {
        _id: 1234,
        name: 'gallery one',
        desc: 'description one',
      };
      this.$httpBackend.expectDELETE(expectUrl, expectGallery, expectHeaders)
      .respond(204, expectGallery);

      expect(this.galleryItemCtrl.deleteGallery(expectGallery._id)).to.not.throw();

      this.$httpBackend.flush();
      this.$rootScope.$apply();
      done();
    });
  });
});
