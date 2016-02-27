(function () {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('Users')
		.service('UsersService', Users);

	/* @ngInject */
	function Users(APPLICATION_SETTINGS, FirebaseAuthFactory, UserFactory, $q, $state) {
		/*jshint validthis: true */

		var service = {
			currentUser: null,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn
		};

		FirebaseAuthFactory.$onAuth(function authStateChanged(authData) {

				if(!authData) {
				service.currentUser = null;
				$state.go(APPLICATION_SETTINGS.authentication.publicState);
				return;
			}

			service.currentUser = new UserFactory(authData);
		});

		return service;

		function login() {

			var deferred = $q.defer();

			FirebaseAuthFactory.$authWithOAuthPopup('facebook')
				.then(function authenticationSuccess(authData) {
					deferred.resolve(authData);
				})
				.catch(function authenticationFailure(error) {
					deferred.reject(error);
				});

			return deferred.promise;

		}

		function logout() {
			return FirebaseAuthFactory.$unauth();
		}

		function isLoggedIn() {
			return (service.currentUser) ? true : false;
		}

		function _isUserAuthenticated() {
			return FirebaseAuthFactory.$getAuth();
		}
	}

})();
