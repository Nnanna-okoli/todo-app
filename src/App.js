import React, { useState } from "react"; // imports react and useState from react 
import "./App.css"; // imports the custom css stylesheet
import TodoForm from "./components/TodoForm"; // todoform component
import  TodoItem from "./components/TodoItem"; // todoitem component

function App() { // function app is rendered to the screen via index.js
  const [todos, setTodos] = useState([]); //set to an empty array because it will be an array of todos

  const addTodo = (text) => {
    let id = 1; // first todo
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {
      id: id, // set the id to the id that was just created 
      text: text, //text set to text that is passed in from the user input 
      completed: false
    }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id )
    setTodos(updatedTodos);
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => { 
      if(todo.id === id) {
        todo.completed =  !todo.completed;
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {todos.map((todo) => {
        return (
          <TodoItem  removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/> 
        )
      })}

    </div>
  );
}

export default App;
