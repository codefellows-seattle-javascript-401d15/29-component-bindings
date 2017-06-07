'use strict';
require('./lib/test-setup');

const angular =require('angular');
// require('angular-mocks');

describe('testing HomeController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      // this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      console.log('SCOTT WAS HERE', this.homeCtrl);
      this.homeCtrl.$onInit();
    });
  });

  // afterEach(() => this.$rootScope.$apply());

  it('should have a initial properties', () => {
    expect(this.homeCtrl.title).toEqual('Welcome to the Home Page');
  });
});
