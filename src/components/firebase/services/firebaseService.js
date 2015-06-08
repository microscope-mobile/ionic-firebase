'use strict';

// imports
var Firebase = require('firebase');

/**
 * Firebase service
 */
function FirebaseService($firebaseArray) {
	var ref = new Firebase("https://mobile-firebase.firebaseio.com/superhereos");
	this.data = $firebaseArray(ref);
}

/**
 * Get all data
 */
FirebaseService.prototype.getAll = function () {
	return this.data;
};

/**
 * Get data by id
 */
FirebaseService.prototype.get = function (id) {
	return this.data.$getRecord(id);
};

module.exports = FirebaseService;