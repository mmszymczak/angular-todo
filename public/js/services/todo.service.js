(function(){
	'use strict';

	angular
		.module("todo")
		.service("ajaxService", ajaxService);

	ajaxService.$inject = ['$http'];

	function ajaxService($http){
		return {
			getData: getData,
			postData: postData,
			putData: putData,
			deleteData: deleteData
		};

		function getData() {
            return $http.get("/api/todos")
            	.then( _successCallback, _errorCallback );
        }
		function postData(todo){
			return $http.post("/api/todos", todo)
            	.then( _successCallback, _errorCallback );
		}
		function putData(todo){
			return $http.put("/api/todos/"+todo.id, todo)
            	.then( _successCallback, _errorCallback );
		}
		function deleteData(id){
			return $http.delete("/api/todos/"+id, id)
            	.then( _successCallback, _errorCallback );
		}
		//	Private
		function _successCallback(response){
			return response.data;
		}
		function _errorCallback(response){
			return alert(new Error(response.responseText));
		}
	}
})();