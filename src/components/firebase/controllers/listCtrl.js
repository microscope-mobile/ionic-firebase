'use strict';

/**
 * List items controller class
 */
function ListCtrl(firebaseService) {
	this.superheroes = firebaseService.getAll();
}

module.exports = ListCtrl;