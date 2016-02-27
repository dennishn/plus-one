(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('protected.index')
		/* @ngInject */
		.config(function ($stateProvider) {

			var ProtectedIndex = {
				name: 'application.protected.index',
				url: '/app',
				views: {
					'application@application': {
						templateUrl: 'modules/protected/index/index.template.html',
						controller: 'ProtectedIndexController',
						controllerAs: 'index'
					}
				}
			};

			$stateProvider.state(ProtectedIndex);
		});
})();
