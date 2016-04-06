(function(){
	'use strict';

	angular
		.module('todo')
		.directive('editEscape', editEscape);

	function editEscape(){
		var ESCAPE_KEY = 27;

		return {
			link: function (scope, elem, attrs){
				elem.bind('keydown', function (event) {
					if (event.keyCode === ESCAPE_KEY) {
						scope.$apply(attrs.editEscape);
					}
				});

				scope.$on('$destroy', function () {
					elem.unbind('keydown');
				});
			}
		};
	}

})();