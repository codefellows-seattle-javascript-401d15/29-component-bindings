'use strict';

require('../../app/entry.js');
require('angular-mocks');

describe('Home Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $controller))
    this.$rootScope = $rootScope
    this.$window = $window
    this.$controller = $controller
    this.authService = authService

    this.homeCtrl = new $controller('HomeController')
    this.homeCtrl.$onInit
    done();
  })
})
