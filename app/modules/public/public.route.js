(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('public')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Public = {
				name: 'application.public',
				abstract: true,
				data: {
					authenticate: false
				},
				resolve: {
					debugInfo: function() {
						console.log('its public');
						return 'public';
					}
				}
			};

			$stateProvider.state(Public);
		});
})();
