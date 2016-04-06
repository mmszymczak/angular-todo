(function(){
	'use strict';
	
	angular
		.module('todo')
			.directive('element', element);

	function element(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/todo_main/element.html',
			controller: 'ElementController',
			controllerAs: 'vm',
			link: function(scope, element, attrs, Ctrl){
				scope.vm.toggleAllCompleted = toggleAllCompleted;

				function toggleAllCompleted(){
					scope.vm.list.forEach(function(todo){
						todo.completed = scope.vm.allToggle;
						scope.vm.updateRemoteData(todo);
					});
				}

			}
		};	
	}

})();