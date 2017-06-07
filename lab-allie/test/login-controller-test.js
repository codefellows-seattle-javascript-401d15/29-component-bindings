'use strict';

describe('Testing the Login Controller', function() {
  beforeEach(() => { /* eslint-disable */
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $componentController, $window, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.loginCtrl = $componentController('loginController');
    });
  })
  
  beforeEach(() => {
    this.loginCtrl.$onInit();
    this.$window.localStorage.setItem('token', 'test token');
  })
  
  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  })
  
  describe('testing loginCtrl.login()', () => {
    
    it('should make a valid GET request to log in', () => {
      let expectUser = {
        username: 'testname',
        email: 'test@test.com',
        password: 'password'
      }
      
      let expectUrl = 'http://localhost:3000/api/login';
      
      let expectConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
      
      this.$httpBackend.whenGET(expectUrl, expectUser, expectConfig).respond(200, 'user token');
      console.log('expectUser', expectUser);
      this.loginCtrl.login().then(() => {
        expect(this.$window.localStorage.token).toEqual('user token');
        this.$httpBackend.flush();
        this.$rootScope.$apply();
      })
    })
  })
  
  
});