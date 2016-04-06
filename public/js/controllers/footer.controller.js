(function(){
	'use strict';

	angular
		.module("todo")
		.controller("FooterController", FooterController);

	FooterController.$inject = ['paramFilters', '$controller'];

	function FooterController(paramFilters, $controller){
		var fc = this;

		fc.urlFilter = paramFilters.actualRoute();
	}

})();