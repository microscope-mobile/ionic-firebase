'use strict';

// Imports
require('angularfire');
var angular = require('angular');

var ListCtrl  = require('./controllers/listCtrl');
var ShowCtrl  = require('./controllers/showCtrl');

var FirebaseService  = require('./services/firebaseService');

// Home sub-module definition
var firebase = angular.module('app.firebase', ['firebase']);
firebase.service('firebaseService', ['$firebaseArray', FirebaseService]);
firebase.controller('ListCtrl', ['firebaseService', ListCtrl]);
firebase.controller('ShowCtrl', ['$stateParams', 'firebaseService', ShowCtrl]);

module.exports = firebase;