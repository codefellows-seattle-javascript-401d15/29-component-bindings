'use strict';

require('./lib/test-setup');

const angular = require('angular');
// require('angular-mocks');

describe('testing SignupController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      // this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });

  // afterEach(() => this.$rootScope.$apply());

  it('should have a initial properties', () => {
    expect(this.signCtrl.title).toEqual('This is where we signup for the app');
  });
});
