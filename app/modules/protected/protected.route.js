(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('protected')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Protected = {
				name: 'application.protected',
				abstract: true,
				route: 'protected',
				data: {
					authenticate: true
				},
				resolve: {
					currentAuth: function(FirebaseAuthFactory) {
						return FirebaseAuthFactory.$requireAuth();
					},
					debugInfo: function() {
						console.log('its protected');
						return 'protected';
					}
				}
			};

			$stateProvider.state(Protected);
		});
})();
