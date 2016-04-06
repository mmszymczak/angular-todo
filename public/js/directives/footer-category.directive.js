(function(){
	'use strict';
	
	angular
		.module('todo')
			.directive('footerCategory', footerCategory);

	function footerCategory(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/footer/index.html',
			controller: 'FooterController',
			controllerAs: 'fc',
			require: '^element',
			link: function(scope, element, attrs, parentCtrl){
				
				scope.fc.removeCompleted = function(){
					var toRemove = parentCtrl.list.filter(function(todo){
						return todo.completed;
					});console.log(toRemove);
					toRemove.forEach(function(todo){
						parentCtrl.removeFromRemoteData(todo.id);
					});
				}

				scope.fc.activeCounter = function(){
					var counter = parentCtrl.list.filter(function(todo){
						return !todo.completed;
					});
					return counter.length;
				}
				
				scope.fc.completedCounter = function(){
					var counter = parentCtrl.list.filter(function(index){
						return index.completed;
					});
					return counter.length;
				}
			}
		};	
	}

})();