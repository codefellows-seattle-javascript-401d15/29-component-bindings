'use strict';

describe('Testing the Home Controller', function() {
  beforeEach(() => { /* eslint-disable */
    angular.mock.module('routesApp'); 
    angular.mock.inject(($rootScope, $controller, $window, $httpBackend, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.homeCtrl = new $controller('HomeController');
      this.galleryService = galleryService;
    });
    this.$window.localStorage.setItem('token', 'test token');
  });
  
  afterEach(() => {
    this.$rootScope.$apply();
    this.$window.localStorage.removeItem('token');
  });
  
  it('should have a title property', () => {
    let expectUrl = 'http://localhost:3000/api/gallery'
    let expectHeaders = {
      'Accept': 'application/json',
      Authorization: `Bearer ${this.$window.localStorage.token}`
    }
    let expectGalleries = [
      {
        name: 'one',
        desc: 'one'
      },
      {
        name: 'two',
        desc: 'two'
      }
    ]
    
    this.$httpBackend.expectGET(expectUrl, expectHeaders).respond(200, expectGalleries)
    this.homeCtrl.$onInit();

    expect(this.homeCtrl.title).toEqual('Welcome to cfGram!');
    expect(this.homeCtrl.title).toEqual(jasmine.any(String));
  });
});