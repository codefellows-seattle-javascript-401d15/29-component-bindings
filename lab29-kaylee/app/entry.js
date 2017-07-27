'use strict'

// require('./scss/main.scss')

const path = require('path')
const camelcase = require('camelcase')
const pascalcase = require('pascalcase')
const angular = require('angular')
require('@uirouter/angularjs')

const slugram = angular.module('slugram', ['ui.router'])

const routesApp = angular.module('routesApp', ['ui.router'])

let context = require.context('./config/', true, /\.js$/)
context.keys().forEach(key => routesApp.config(context(key)))

context = require.context('./view/', true, /\.js$/)
context.keys().forEach(key => routesApp.controller(pascalcase(path.basename(key, '.js')), context(key)))

context = require.context('./service/', true, /\.js$/)
context.keys().forEach(key => routesApp.service(camelcase(path.basename(key, '.js')), context(key)))

context = require.context('./component/', true, /\.js$/)
context.keys().forEach(key => routesApp.component(camelcase(path.basename(key, '.js')), context(key)))
