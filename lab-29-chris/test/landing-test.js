'use strict';

// require('./lib/test-setup');

describe('Landing Controller', function () {
  describe('Default Properties', () => {

    beforeEach(() => {
      angular.mock.module('cfgram');
      angular.mock.inject(($rootScope, $controller) => {
        this.landingCtrl = new $controller('LandingController');
        this.$rootScope = $rootScope;
      });
    });

    it('should set title correctly', done => {
      // console.log('one time rootScope', this.$rootScope);
      expect(this.landingCtrl.title).toBe('Landing Controller');
      console.log('title is ...', this.landingCtrl.title);
      done();
    });

    it('should have default of false on showSignup', done => {
      expect(this.landingCtrl.showSignup).toBe(false);
      console.log('showSignup: ', this.landingCtrl.showSignup);
      done();
    });
  });
});
