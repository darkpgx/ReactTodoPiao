var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    //validate if given param is an array
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos: [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    //Array.filter: take an existing array and filter based on return of the call back
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //Sort todos with non-completed first
    //Array.sort: sort the existing array; return -1, a will come before b; return 1, b will come before a; return 0 for default;
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
