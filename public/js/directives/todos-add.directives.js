(function(){
	'use strict';
	
	angular
		.module('todo')
			.directive('addElem', addElem);

	function addElem(){
		return {
			restrict: 'E',
			templateUrl: 'templates/pages/add_elem/index.html',
			require: '^element',
			link: function(scope, element, attrs, elementCtrl){
				element.on('submit', function(){
					elementCtrl.saveToRemoteData({
						title: scope.newElement,
						completed: false,
						isImportant: false
					});
					scope.newElement = '';
				});
			}
		};
	}

})();