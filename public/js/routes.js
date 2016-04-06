(function(){
	'use strict';
	
	angular
		.module("todo")
		.config(config);

	config.$inject = ['$routeProvider']; 

	function config($routeProvider){
		$routeProvider
			.when('/:filter?', {
				templateUrl: 'templates/pages/todo_main/index.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();