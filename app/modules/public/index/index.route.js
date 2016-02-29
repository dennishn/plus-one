(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('public.index')
		/* @ngInject */
		.config(function ($stateProvider) {

			var PublicIndex = {
				name: 'application.public.index',
				url: '/',
				views: {
					'application@application': {
						templateUrl: 'modules/public/index/index.template.html',
						controller: 'PublicIndexController',
						controllerAs: 'publicIndex'
					}
				}
			};

			$stateProvider.state(PublicIndex);
		});
})();
