'use strict';

const expect = require('chai').expect;

describe('testing signup', function(){
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $SignupController, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.signupCtrl = $SignupController('signup');
    });
  });

  afterEach(done => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  afterEach(done => this.$rootScope.$apply());

  it('should send user data to the server', () => {
    let expectUrl = 'http://localhost:3000/api/auth/signup';
    let expectBody = {
      username: 'testUser',
      email: 'testuser@test.com',
      password: 'pass123',
    };
    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    this.signupCtrl.user = {
      username: 'testUser',
      email: 'testuser@test.com',
      password: 'pass123',
    };

    this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
    .respond(200, 'exampletoken1234');

    console.log('signupCtrl', this.authSignupFormCtrl.handleSubmit);
    this.authSignupFormCtrl.handleSubmit();

    this.$httpBackend.flush();
  });
});
