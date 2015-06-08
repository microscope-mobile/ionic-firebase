'use strict';

// Show item controller class
function ShowCtrl ($stateParams, firebaseService) {
	this.superhero = firebaseService.get($stateParams.id);
}

module.exports = ShowCtrl;