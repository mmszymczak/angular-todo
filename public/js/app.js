(function(){  
	angular.module("todo")
	.controller("ElementController", [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

		$scope.list = [];
		
		$http.get('/api/todos').success(function(data){
			$scope.list = data;
		});
		
		$scope.urlFilter = $routeParams.filter;

		$scope.paramFilters = function(){
			var result = {};
			switch($routeParams.filter){
				case 'active': result = {completed: false}; break;
				case 'completed': result = {completed: true}; break;
				case 'important': result = {isImportant: true}; break;
			}
			return result;
		}
		
		$scope.newElement = "";

		$scope.addElem = function(){
			$scope.list.push({title:$scope.newElement});
			$scope.newElement = "";
		};

		$scope.removeElem = function(index){
			$scope.list.splice(index,1);
		};

		$scope.toggleCompleted = function(){
			$scope.list.forEach(function(todo){
				todo.completed = $scope.allToggle;
			});
		};

		$scope.removeCompleted = function(){
			$scope.list = $scope.list.filter(function(todo){
				return !todo.completed;
			});
		};

		$scope.activeCounter = function(){
			var counter = $scope.list.filter(function(todo){
				return !todo.completed;
			});
			return counter.length;
		};

		$scope.completedCounter = function(){
			var counter = $scope.list.filter(function(index){
				return index.completed;
			});
			return counter.length;
		};

		$scope.SAVE = function(){
			var data = $.param($scope.list);
			$http({
			    method: 'POST',
			    url: '/api/todos',
			    data: data,
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data){
				console.log('success');
			});
		};

	}]);

})();