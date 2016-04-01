(function(){
	var app = angular.module('directive-module', []);
	
	app.directive('footerIndex', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/footer/index.html'
		};
	});

	app.directive('todoList', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/todo_list/index.html'
		}
	});

	app.directive('addElem', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/elem_input/index.html'
		}
	});

})();