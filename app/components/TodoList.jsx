var React = require('react');
//React-redux: connect is companion with provider from react-redux
var {connect} = require('react-redux');
import Todo from 'Todo';

//For test purpose export
export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return <p className="container__message">Nothing To Do</p>;
      }
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

//React-redux: pass in a function that takes the state from store and return only state item that matters; in this case todos
//Now todos is set on the props of the connecting component
//export default instead of module.exports
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
