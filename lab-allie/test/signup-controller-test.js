// 'use strict';
// 
// describe('Testing the Home Controller', function() {
//   beforeEach(() => {  /* eslint-disable */
//     angular.mock.module('routesApp'); 
//     angular.mock.inject(($rootScope, $controller) => {
//       this.$rootScope = $rootScope;
//       this.homeCtrl = new $controller('HomeController');
//       this.homeCtrl.$onInit();
//     });
//   });
//   
//   afterEach(() => this.$rootScope.$apply());
//   
//   it('should have a title property', () => {
//     expect(this.homeCtrl.title).toEqual('Welcome to cfGram!');
//     expect(this.homeCtrl.title).toEqual(jasmine.any(String));
//   });
// });