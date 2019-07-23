import React from 'react'

const Todos = ({todos, deleteTodo}) => {
 
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
                <div className='collection-item' key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}<button id='delbutton'>Delete</button></span>
                </div>
            )
        })
    ) : (
        <p className='center'>hauna bya ku fanya tena petit </p>
    ) 
    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )
}

export default Todos