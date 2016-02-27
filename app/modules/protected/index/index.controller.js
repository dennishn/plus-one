(function () {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('protected.index')
		.controller('ProtectedIndexController', ProtectedIndexController);

	/* @ngInject */
	function ProtectedIndexController(UsersService) {
		/*jshint validthis: true */
		var vm = this;

		vm.user = UsersService.currentUser;
	}

})();
