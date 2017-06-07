'use strict';

// require('./lib/test-setup');

// const angular = require('angular');
// const authService = require('../app/service/auth-service');

describe('Signup Controller', function () {

  describe('authService', function() {
    beforeEach(done => {
      angular.mock.module('cfgram');
      angular.mock.inject(($httpBackend, $window, $rootScope, authService) => {
        this.$httpBackend = $httpBackend;
        this.$window = $window;
        this.$rootScope = $rootScope;
        this.authService = authService;
        // this.authService.signup = authService.signup;
        // this.signupCtrl = new $controller('SignupController');
        // this.$rootScope = $rootScope;
        // console.log('title is ...', authService);
        done();
      });
    });

    it('should return a token', done => {
      console.log('this window', this.$rootScope);
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');
      this.authService.getToken()
      .then(token => {
        expect(token).toBe('test token');
      })
      .catch(err => {
        expect(err).toBe(null);
      });
      done();
    });
  });

  describe('Default Properties', () => {


    it('should set title correctly', done => {
      // expect(this.landingCtrl.title).toBe('Enter your information');
      done();
    });

    // it('should have default of false on showSignup', done => {
    //   expect(this.landingCtrl.showSignup).toBe(false);
    //   console.log('showSignup: ', this.landingCtrl.showSignup);
    //   done();
    // });
  });
});
