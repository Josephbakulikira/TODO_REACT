import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {

  state = {
    todos:[
      {id: 1, content: "buy choco's"},
      {id: 2, content: 'study'}
    ]
  }
  deleteTodo = (id) =>{
     const todos = this.state.todos.filter(todos => {
       return todos.id !== id
     });
     this.setState({
       todos: todos
     })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos= [ ...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render (){
      return(
      <div className="todo-app container">
        
        <h1 id='title' className='center purple-text'> Todo's</h1>
        <AddForm addTodo={this.addTodo}/> 
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        
      </div>
    );
  }
}

export default App;
