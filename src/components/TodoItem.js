import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'

//todo is an object that contains an id, completed and text 
function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props; // created props stored in var

  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}> {/* if task is completed add complete class (line-through) if not set normal todo row clas */}
        {todo.text} {/* accessing the prop todo displaying the text from the user input */}
        <div className='iconsContainer'>
            <RiCloseCircleLine // installed icon from react and imported on l:2 
                className='icon'
                onClick={() => removeTodo(todo.id)}
                style={{marginRight: 5}}
            /> 
            <BiCheckCircle 
                className='icon'
                onClick={() => completeTodo(todo.id)}
            />

        </div>
    </div>
  ) 
}
export default TodoItem
