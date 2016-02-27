(function () {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('FirebaseAuth')
		.factory('FirebaseAuthFactory', FirebaseAuth);

	/* @ngInject */
	function FirebaseAuth($firebaseAuth, API_ENDPOINTS) {
		/*jshint validthis: true */
		var ref = new Firebase(API_ENDPOINTS.root);
		return $firebaseAuth(ref);
	}

})();
