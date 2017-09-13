var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

//export the original react component versus the connect ran through todo
//this export is only for testing
export var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        // this.props.onToggle(id);
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

//By calling connect, now this component can use dispatch from props
//This is the default export when some file require() the module;
export default connect()(Todo);
