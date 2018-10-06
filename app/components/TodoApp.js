var React=require('react');
var uuid=require('node-uuid');
var moment=require('moment');

var TodoList=require('TodoList');
var AddTodo=require('AddTodo');
var TodoSearch=require('TodoSearch');
var TodoAPI=require('TodoAPI');


var TodoApp=React.createClass({
    getInitialState: function(){
        return{
            showCompleted:false,
            searchText:'',
            todos:TodoAPI.getTodos()
        };
    },
    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodos:function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text,
                    completed:false,
                    createdAt:moment().unix(),
                    completedAt : moment().unix(),
                }
            ]
        })
    },
    handleToggle : function(id){
      var updateTodos = this.state.todos.map((todo)=>{
          if(todo.id==id){
              todo.completed=!todo.completed;
              todo.completedAt=todo.completedAt ? moment().unix() : undefined;

          }
          return todo;
      });

      this.setState({todos: updateTodos});
    },
    handleSearch : function(showCompleted,searchText){
        this.setState({
            showCompleted : showCompleted,
            searchText : searchText.toLowerCase(),
        });
    },

    render : function(){
        var {todos , showCompleted , searchText} = this.state;
        var filteredTodos=TodoAPI.filterTodos(todos, showCompleted, searchText);
        return(
            <div className="container-fluid">
            <h1 className="page-title"><center>Todo App</center></h1>
            <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container-fluid">
                     <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                      <AddTodo onAddTodo={this.handleAddTodos}/>
            </div>
             </div>   
            </div>
            </div>
        )
    }
});

module.exports=TodoApp