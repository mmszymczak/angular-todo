(function(){  
	'use strict';
	
	angular
		.module("todo")
		.controller("ElementController", ElementController);

	ElementController.$inject = ['$http', 'paramFilters', 'ajaxService']; 

	function ElementController($http, paramFilters, ajaxService){

		var vm = this;

		vm.list = [];

		vm.list = ajaxService.getData();

		vm.newElement = "";
		vm.paramFilter = paramFilters.get();
		vm.urlFilter = paramFilters.actualUrl();

		vm.addElem = addElem;
		vm.removeElem = removeElem;
		vm.toggleCompleted = toggleCompleted;
		vm.removeCompleted = removeCompleted;
		vm.activeCounter = activeCounter;
		vm.completedCounter = completedCounter;
		vm.toggleImportant = toggleImportant;

		function removeElem(index){
			vm.list.splice(index,1);
		}

		function addElem(){
			vm.list.push({title:vm.newElement});
			vm.newElement = "";
		}

		function toggleCompleted(){
			vm.list.forEach(function(todo){
				todo.completed = vm.allToggle;
			});
		}

		function removeCompleted(){
			vm.list = vm.list.filter(function(todo){
				return !todo.completed;
			});
		}

		function activeCounter(){
			var counter = vm.list.filter(function(todo){
				return !todo.completed;
			});
			return counter.length;
		}

		function completedCounter(){
			var counter = vm.list.filter(function(index){
				return index.completed;
			});
			return counter.length;
		}

		function toggleImportant(index){
			vm.list[index].isImportant = !vm.list[index].isImportant;
		}

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

	};

})();