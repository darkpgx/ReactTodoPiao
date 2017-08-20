var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      //use Array.map to create an array of jsx (in this case array of <Todo/>)
      //important: remember to include key
      return todos.map((todo) => {
        return (
          //use the ...todo spread to pass down all attribute to the Todo component
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
