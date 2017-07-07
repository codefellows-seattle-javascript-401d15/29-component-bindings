'use strict';

require('./scss/layout.scss');
require('./scss/theme.scss');
require('angular-material/angular-material.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
require('@uirouter/angularjs');
require('angular-material');

const cfgram = angular.module('cfgram', ['ui.router', 'ngMaterial'])
.config(function ($mdThemingProvider) {
  console.log('YOOOOOOOOOO');
  let indigo = $mdThemingProvider.extendPalette('indigo', {
    '500': '000000',
  });
  $mdThemingProvider.definePalette('indigo', indigo);
  indigo = $mdThemingProvider.extendPalette('red', {
    '500': 'ff5800',
  });
  $mdThemingProvider.definePalette('red', indigo);

  $mdThemingProvider.theme('default').primaryPalette('indigo').warnPalette('red');

  $mdThemingProvider.theme('default').foregroundPalette[3] = 'rgba(0,0,0,0.67)';

});


let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => cfgram.config(context(key)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  cfgram.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.component(name, module);
});
