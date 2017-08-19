var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation: use loaders 'style!css!' to load foundation.min.css
//No longer needed as we load from foundation scss
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate Project</p>,
  document.getElementById('app')
);
