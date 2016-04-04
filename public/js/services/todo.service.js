(function(){
	'use strict';

	angular
		.module("todo")
		.service("ajaxService", ajaxService);

	ajaxService.$inject = ['$http', '$q'];

	function ajaxService($http, $q){
		return {
			getData: getData,
			postData: postData,
			putData: putData,
			deleteData: deleteData
		};

		function getData(){
			var list = [];
			//var request = 
			$http.get('/api/todos').success(function(data){
				return list = data;
			});
			return list;
			//return ( request.then(successCallback, errorCallback) );
		}
		function postData(){

		}
		function putData(){
			
		}
		function deleteData(){
			
		}



		// function successCallback(response){
		// 	return response.data;
		// }
		// function errorCallback(response){
		// 	return $q.reject( "An unknown error occurred." );
		// }
	}

})();