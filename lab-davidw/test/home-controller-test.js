'use strict';

const expect = require('chai').expect;

describe('testing HomeController', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {

    expect(this.homeCtrl).toBeDefined();
  });

  it('should have a title', () => {

    expect(this.homeCtrl.title).toBeDefined();
    expect(this.homeCtrl.title).toEqual(jasmine.any(String));
    expect(this.homeCtrl.title).toBe('Welcome to Home');
  });
});
