(function(){  
	'use strict';
	
	angular
		.module("todo")
		.controller("ElementController", ElementController);

	ElementController.$inject = ['$http', 'paramFilters', 'ajaxService']; 

	function ElementController($http, paramFilters, ajaxService){

		var vm = this;

		vm.list = [];
		
		vm.saveToRemoteData = saveToRemoteData;
		vm.updateRemoteData = updateRemoteData;
		vm.loadRemoteData = loadRemoteData;
		vm.removeFromRemoteData = removeFromRemoteData;

		//	Data functions
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

	};

})();