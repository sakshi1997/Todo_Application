var React=require('react');
var Todo=require('Todo');
var TodoAPI=require('TodoAPI');

var TodoList=React.createClass({
    render:function(){
        var {todos}=this.props;
        var renderTodos=()=>{
            if(todos.length === 0){
                return(
                   <b><i><p className="container__message">Nothing to do!</p></i></b>
                );
            }
            return todos.map((todo)=>{
                return(
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };
        return(
            <div>
                {renderTodos()}
                </div>
        )
    }
});

module.exports=TodoList