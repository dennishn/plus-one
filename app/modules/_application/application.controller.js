(function () {
	'use strict';

	/**
	 * @name application
	 * @author Dennis Haulund Nielsen
	 *
	 * Root Application Controller
	 */
	angular
		.module('application')
		.controller('Application', Application);

	/* @ngInject */
	function Application($state, $scope, UsersService) {
		/*jshint validthis: true */
		var vm = this;

		vm.login = login;

		vm.logout = logout;

		$scope.$watch(function() {
			return UsersService.isLoggedIn();
		}, function(isLoggedIn) {
			vm.isLoggedIn = isLoggedIn;
		});

		function login() {
			UsersService.login()
				.then(function() {
					$state.go('application.protected.index');
				});
		}

		function logout() {
			UsersService.logout();
		}

	}

})();
