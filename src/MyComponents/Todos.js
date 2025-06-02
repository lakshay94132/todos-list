import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className="Conatiner">
        <h3 className="text-center"> Todos List </h3>
        {props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}

export default Todos
