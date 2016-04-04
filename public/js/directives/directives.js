(function(){
	'use strict';
	
	angular
		.module('directive-module', [])
			.directive('footerIndex', footerIndex)
			.directive('todoList', todoList)
			.directive('addElem', addElem);

	function footerIndex(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/footer/index.html'
		};	
	}

	 function todoList(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/todo_list/index.html'
		};
	}

	function addElem(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/elem_input/index.html'
		};
	}

})();