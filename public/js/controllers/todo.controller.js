(function(){  
	'use strict';
	
	angular
		.module("todo")
		.controller("ElementController", ElementController);

	ElementController.$inject = ['$http', 'paramFilters', 'ajaxService']; 

	function ElementController($http, paramFilters, ajaxService){

		var vm = this;

		vm.list = [];

		loadRemoteData();

		vm.newElement = "";
		vm.paramFilter = paramFilters.get();
		vm.urlFilter = paramFilters.actualRoute();

		vm.addElem = addElem;
		vm.removeElem = removeElem;
		vm.toggleCompleted = toggleCompleted;
		vm.toggleAllCompleted = toggleAllCompleted;
		vm.removeCompleted = removeCompleted;
		vm.activeCounter = activeCounter;
		vm.completedCounter = completedCounter;
		vm.toggleImportant = toggleImportant;

		function removeElem(todo){
			removeFromRemoteData(todo.id);
		}

		function addElem(){
			saveToRemoteData({
				title: vm.newElement,
				completed: false,
				isImportant: false
			});
			vm.newElement = "";
		}

		function toggleCompleted(todo){
			var item = vm.list.filter(function(todos){
				if(todos.id === todo.id){
					if(todos.isImportant)
					todos.isImportant = !todos.isImportant;
				}
        		return todos.id === todo.id;
        	});
			updateRemoteData(item[0]);
		}

		function toggleAllCompleted(){
			vm.list.forEach(function(todo){
				todo.completed = vm.allToggle;
				updateRemoteData(todo);
			});
		}

		function removeCompleted(){
			var toRemove = vm.list.filter(function(todo){
				return todo.completed;
			});
			toRemove.forEach(function(todo){
				removeFromRemoteData(todo.id);
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

		function toggleImportant(todo){
			var item = vm.list.filter(function(todos){
				if(todos.id === todo.id){
					todos.isImportant = !todos.isImportant;
					todos.completed = false;
				}
        		return todos.id === todo.id;
        	});
        	updateRemoteData(item[0]);
		}

		/////
        function loadRemoteData(){
            ajaxService.getData()
	            .then(function(data){
	            	vm.list = data;
	            });
        }

        function updateRemoteData(todo){
        	ajaxService.putData(todo);
        }

        function saveToRemoteData(todo){
        	ajaxService.postData(todo)
        		.then(function(data){
        			vm.list.push(data);
        		});
        }

        function removeFromRemoteData(id){
        	var item = vm.list.filter(function(todo){
        		return todo.id === id;
        	});
        	ajaxService.deleteData(id)
        		.then(function(data){
        			vm.list.splice(vm.list.indexOf(item[0]), 1);
        		});
        }
        /////
	};

})();