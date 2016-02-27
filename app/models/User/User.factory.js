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
		.factory('UserFactory', User);

	/* @ngInject */
	function User() {
		/*jshint validthis: true */

		// Variables

		/*
		 {
		 "provider": "facebook",
		 "uid": "facebook:724931680",
		 "facebook": {
		 "id": "724931680",
		 "accessToken": "CAABivQVshJ0BABOv3NZAZBlgMVg1fluDHMjvIpV4cb2tmUtQU95rb1wUHIB48loxHQLVAHI9ZBjbv0ZBLlXiAB3FDV6j0LTGzrWhV8BZAOOk9geIDkRmioJ6DRUMnVIYgIov11pY0EFISX1ZB1RfQtONdnioRnnZBd4UOHO6qcXVwlWSUAgXs9j6y5p36Y0UvwZD",
		 "displayName": "Dennis Haulund Nielsen",
		 "cachedUserProfile": {
		 "id": "724931680",
		 "name": "Dennis Haulund Nielsen",
		 "last_name": "Nielsen",
		 "first_name": "Dennis",
		 "middle_name": "Haulund",
		 "gender": "male",
		 "link": "https:\/\/www.facebook.com\/app_scoped_user_id\/724931680\/",
		 "picture": {
		 "data": {
		 "is_silhouette": false,
		 "url": "https:\/\/scontent.xx.fbcdn.net\/hprofile-xft1\/v\/t1.0-1\/p100x100\/10551028_1015\u2026_2914246572855882395_n.jpg?oh=4c054ae749e67ad6910aec660ff51a5e&oe=5728EA6E"
		 }
		 },
		 "age_range": {
		 "min": 21
		 },
		 "locale": "da_DK",
		 "timezone": 1
		 },
		 "profileImageURL": "https:\/\/scontent.xx.fbcdn.net\/hprofile-xft1\/v\/t1.0-1\/p100x100\/10551028_1015\u2026_2914246572855882395_n.jpg?oh=4c054ae749e67ad6910aec660ff51a5e&oe=5728EA6E"
		 },
		 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6ImZhY2Vib29rOjcyNDkzMTY4MCIsInByb3ZpZGVyIjoiZmFjZWJvb2sifSwiaWF0IjoxNDU2MjEyNDk4fQ.1kGCPbz_W-haFP8enG_SwKa7GzhkPDLbh2zJxOvhpGE",
		 "auth": {
		 "uid": "facebook:724931680",
		 "provider": "facebook"
		 },
		 "expires": 1456298898
		 }
		 */

		// instantiate initial object
		var Model = function(data) {
			angular.extend(this, data);
		};

		Model.prototype.getProfileImage = function() {
			return this.facebook.profileImageURL;
		};

		Model.prototype.getFullName = function() {
			return this.facebook.cachedUserProfile.name;
		};

		return Model;
	}

})();
