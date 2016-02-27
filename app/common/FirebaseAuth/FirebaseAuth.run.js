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
		.run(FirebaseAuthRun);

	/* @ngInject */
	function FirebaseAuthRun(APPLICATION_SETTINGS, $rootScope, $state, UsersService, FirebaseAuthFactory) {
		/*jshint validthis: true */

		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			// We can catch the error thrown when the $requireAuth promise is rejected
			// and redirect the user back to the home page
			if (error === 'AUTH_REQUIRED') {
				$state.go(APPLICATION_SETTINGS.authentication.publicState);
			}
		});

	}

})();
