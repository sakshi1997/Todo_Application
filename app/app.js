var React=require('react');

var ReactDOM=require('react-dom');

var TodoApp=require('TodoApp');

$(document).foundation();

require('style!css!foundation-sites/dist/css/foundation.min.css');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);