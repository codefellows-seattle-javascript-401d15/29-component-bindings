'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing authSignupForm', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope;

      this.$httpBackend = $httpBackend;
      this.authSignupFormCtrl = $componentController('authSignupForm');
      this.authSignupFormCtrl.$onInit();
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  afterEach(() => this.$rootScope.$apply());


  it('should send user data to the server', () => {

    let expectUrl = 'http://localhost:3000/api/login';
    let expectBody = {
      username: 'michael',
      email: 'michael@michael.com',
      password: 'password1234',
    };
    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    this.authSignupFormCtrl.user = {
      username: 'michael',
      email: 'michael@michael.com',
      password: 'password1234',
    };

    this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
    .respond(200, 'exampletoken1234');

    console.log('authSignupFormCtrl', this.authSignupFormCtrl.handleSubmit);
    this.authSignupFormCtrl.handleSubmit();
    this.$httpBackend.flush();
  });
});
