'use strict';

// 27
const angular = require('angular');
require('angular-mocks');

describe('testing controller', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have a title', () => {
    expect(this.title).toEqual('Home');
  });

});
