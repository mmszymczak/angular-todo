(function(){
	'use strict';

	angular
		.module('todo')
		.directive('editFocus', editFocus);

	editFocus.$inject = ['$timeout'];

	function editFocus($timeout) {
		return {
			link: function(scope, elem, attrs) {
				scope.$watch(attrs.editFocus, function (newVal) {
					if (newVal) {
						$timeout(function () {
							elem[0].focus();
						}, 0, false);
					}
				});
			}
		};
	}
	
})();