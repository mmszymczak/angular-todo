(function(){

	angular.module("todo")
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'templates/pages/todo_main/index.html',
			controller: 'ElementController'
		})
		.when('/:filter?', {
			templateUrl: 'templates/pages/todo_main/index.html',
			controller: 'ElementController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);

})();