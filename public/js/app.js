(function(){  
	var app = angular.module("todo", ['ngRoute']);
	
	app.controller("ElementController", ['$http', function($http){
		var vm = this;

		vm.list = [];
		
		$http.get('/api/todos').success(function(data){
			vm.list = data;
		});
		
		vm.newElement = "";

		vm.addElem = function(){
			vm.list.push({title:vm.newElement});
			vm.newElement = "";
		};

		vm.removeElem = function(index){
			vm.list.splice(index,1);
		};

		vm.toggleCompleted = function(){
			vm.list.forEach(function(todo){
				todo.completed = vm.allToggle;
			});
		};

		vm.removeCompleted = function(){
			vm.list = vm.list.filter(function(todo){
				return !todo.completed;
			});
		};

		vm.activeCounter = function(){
			var counter = vm.list.filter(function(todo){
				return !todo.completed;
			});
			return counter.length;
		};

		vm.completedCounter = function(){
			var counter = vm.list.filter(function(index){
				return index.completed;
			});
			return counter.length;
		};

		vm.SAVE = function(){
			var data = $.param(vm.list);
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

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			controller: 'ElementController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);

})();