'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.when('/', '/join#signup');
  $urlRouterProvider.when('/signup', '/join#signup');
  $urlRouterProvider.when('/login', '/join#login');
  // $urlRouterProvider.when('/logout');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl',
    },
    {
      name: 'logout',
      url: '/logout',
      template: require('../component/logout/logout.html'),
      controller: 'LogoutController',
      controllerAs: 'logoutCtrl',
    },
    {
      name :'gallery',
      url: '/gallery',
      template: require('../component/gallery/create-gallery/create-gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'galleryCtrl',
    },
  ];

  routes.forEach($stateProvider.state);
}
