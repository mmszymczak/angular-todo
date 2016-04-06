(function(){
	'use strict';
	
	angular
		.module('todo')
			.directive('todoList', todoList);

	 function todoList($timeout){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/todo_list/index.html',
			controller: 'TodoListController',
			controllerAs: 'tl',
			require: '^element',
			link: function(scope, element, attrs, parentCtrl){
				
				parentCtrl.loadRemoteData();

				$timeout(function(){
					scope.tl.list = parentCtrl.list;
				}, 10);

				scope.tl.saveToRemoteData = parentCtrl.saveToRemoteData;
				scope.tl.updateRemoteData = parentCtrl.updateRemoteData;
				scope.tl.loadRemoteData = parentCtrl.loadRemoteData;
				scope.tl.removeFromRemoteData = parentCtrl.removeFromRemoteData;
			}
		};
	}

})();