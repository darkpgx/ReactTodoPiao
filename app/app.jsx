var React = require('react');
var ReactDOM = require('react-dom');
//React-redux: provider lets you provide store to your children call inside React.render
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Adding redux components
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

//Load foundation: use loaders 'style!css!' to load foundation.min.css
//No longer needed as we load from foundation scss
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //React-redux: provider pass in store
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
