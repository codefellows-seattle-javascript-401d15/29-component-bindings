'use strict';

// const angular = require('angular');
// require('angular-mocks');

describe('testing SignupController', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('SignupController');
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {

    expect(this.signupCtrl).toBeDefined();
  });

  it('should have a title', () => {

    expect(this.signupCtrl.title).toBeDefined();
    expect(this.signupCtrl.title).toEqual(jasmine.any(String));
    expect(this.signupCtrl.title).toBe('Welcome to Signup');
  });
});
