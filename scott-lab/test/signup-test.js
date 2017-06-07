'use strict'

const expect = require('chai').expect

describe('Create Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.createGalleryCtrl = $componentController('createGalleryCtrl')
      done()
    })
  })

  
