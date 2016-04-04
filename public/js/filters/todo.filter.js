(function(){
	'use strict';

	angular
		.module("todo")
		.factory("paramFilters", paramFilters);

	paramFilters.$inject = ['$routeParams'];

	function paramFilters($routeParams){
		return {
			actualUrl: function() {
				return $routeParams.filter;
			},
			get: function() {
				var filter = {};
				switch($routeParams.filter){
					case 'active': 
						filter = {completed: false};
						break;
					case 'completed': 
						filter = {completed: true};
						break;
					case 'important': 
						filter = {isImportant: true};
						break;
				}
				return filter; 
			}
		}

	};

})();