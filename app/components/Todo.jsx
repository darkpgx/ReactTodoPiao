var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id);
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p classname="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
