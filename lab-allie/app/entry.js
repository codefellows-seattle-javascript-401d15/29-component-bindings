'use strict';

require('./scss/base/main.scss');
// require('./scss/reset.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
require('@uirouter/angularjs');

const routesApp = angular.module('routesApp', ['ui.router']);
// const routesApp = angular.module('routesApp', ['uiRouter']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => routesApp.config(context(key)));


context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  routesApp.service(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));

  let module = context(key);
  routesApp.component(name, module);
});