(function() {
	'use strict';
	/**
	 * (en)CommonAjaxService
	 * @ko CommonAjaxService
	 * @group Service
	 * @name CommonAjaxService
	 * @class
	 */
	pinpointApp.constant( "CommonAjaxServiceConfig", {
		"serverTimeUrl" : "/serverTime.pinpoint",
		"applicationListUrl": "/applications.pinpoint"
	});
	
	pinpointApp.service( "CommonAjaxService", [ "CommonAjaxServiceConfig", "$http", function( cfg, $http ) {
	
		this.getSQLBind = function(url, data, cb) {
			$http.post( url, data).success( function( result ) {
				cb( result );
			}).error( function( error ) {
				cb( error );
			});
			//jQuery.ajax({
			//	type: 'POST',
			//	url: url,
			//	data: data,
			//	cache: false,
			//	dataType: 'json',
			//	success: function (result) {
			//		if (angular.isFunction(cb)) {
			//			cb(result);
			//		}
			//	},
			//	error: function (xhr, status, error) {
			//		if (angular.isFunction(cb)) {
			//			cb(error);
			//		}
			//	}
			//});
		};

		this.getServerTime = function( cb ) {
			$http.get( cfg.serverTimeUrl ).success(function ( data ) {
				cb( data.currentServerTime );
			}).error( function () {
				cb( Date.now() );
			});
		};
		this.getApplicationList = function( cbSuccess, cbFail ) {
			$http.get( cfg.applicationListUrl ).success(function ( data ) {
				cbSuccess( data );
			}).error(function () {
				cbFail();
			});
		};
	}]);
})();