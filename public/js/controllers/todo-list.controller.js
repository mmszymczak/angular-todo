(function(){
	'use strict';

	angular
		.module("todo")
		.controller("TodoListController", TodoListController);

	TodoListController.$inject = ['paramFilters'];

	function TodoListController(paramFilters){
		var tl = this;

		tl.list = [];
		tl.paramFilter = paramFilters.get();		
		tl.toggleCompleted = toggleCompleted;
		tl.editElement = editElement;
		tl.toggleImportant = toggleImportant;
		tl.saveEdits = saveEdits;
		tl.removeElem = removeElem;
		tl.revertEdits = revertEdits;

		function toggleCompleted(todo){
			var item = tl.list.filter(function(todos){
				if(todos.id === todo.id){
					if(todos.isImportant)
					todos.isImportant = !todos.isImportant;
				}
        		return todos.id === todo.id;
        	});
			tl.updateRemoteData(item[0]);
		}

		function editElement(todo){
			tl.editedTodo = todo;
			tl.originalTodo = angular.extend({}, todo);
		}

		function toggleImportant(todo){
			var item = tl.list.filter(function(todos){
				if(todos.id === todo.id){
					todos.isImportant = !todos.isImportant;
					todos.completed = false;
				}
        		return todos.id === todo.id;
        	});
        	tl.updateRemoteData(item[0]);
		}

		function saveEdits(todo, event){
			if (event === 'blur' && tl.saveEvent === 'submit') {
				tl.saveEvent = null;
				return;
			}
			tl.saveEvent = event;

			if (tl.reverted) {
				tl.reverted = null;
				return;
			}

			todo.title = todo.title.trim();

			if (todo.title === tl.originalTodo.title) {
				tl.editedTodo = null;
				return;
			}

			tl.updateRemoteData(todo);
			tl.editedTodo = null;
		}

		function revertEdits(todo) {
			tl.list[tl.list.indexOf(todo)] = tl.originalTodo;
			tl.editedTodo = null;
			tl.originalTodo = null;
			tl.reverted = true;
		};

		function removeElem(todo){
			tl.removeFromRemoteData(todo.id);
		}
	}

})();