'use strict';

require('./lib/test-setup');
// const angular = require('angular');


describe('Home Controller', function () {
  describe('Default Properties', () => {

    beforeEach(done => {
      angular.mock.module('cfgram');
      angular.mock.inject(($rootScope, $controller) => {
        this.homeCtrl = new $controller('HomeController');
        this.$rootScope = $rootScope;
        done();
      });
    });

    afterEach(() => this.$rootScope.$apply());


    it('should have rootScope id of 1', done => {
      expect(this.$rootScope.$id).toBe(1);
      console.log('this.$rootScope.$id', this.$rootScope.$id);
      done();
    });

    it('should have rootScope success of 1', done => {
      expect(this.$rootScope.$$listenerCount.$locationChangeSuccess).toBe(1);
      console.log('this.$rootScope.$$listenerCount.$locationChangeSuccess',         this.$rootScope.$$listenerCount.$locationChangeSuccess);
      done();
    });

    it('title is set correctly', done => {
      expect(this.homeCtrl.title).toBe('Welcome Home');
      console.log('title is ...', this.homeCtrl.title);
      done();
    });

    it('should have root property of true', done => {
      expect(this.homeCtrl.root).toBe(true);
      console.log('this.homeCtrl.root', this.homeCtrl.root);
      done();
    });
  });
});
