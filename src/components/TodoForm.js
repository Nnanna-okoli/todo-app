import React, { useState } from "react"; //everytime you use a useState you have to import the useState too

export default function TodoForm(props) {
  /* below a state is being created 
    1. input acts like a dynamic (global) variable for this component 
    2. setInput is a function that you call to change the variable
    3. to define a useState you assign an array to a variable  
    and the first index is the var and second index is always the set state !important  */
  const [input, setInput] = useState(""); //creates a state and useState is a react hook which I have set to an empty string

  //arrow function that passes an event because submit is an event
  const handleSubmit = (e) => {
    e.preventDefault()//prevents the page refreshing after submit pressed
    props.addTodo(input)
    setInput("")
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}// after input has been added value=input sets it back to nothing

      /* onChange detects when the value of an input element changes 
        then arrow function passes event => event target value 
        which is the user text typed to the setInput state */
        onChange={(e) => setInput(e.target.value)} 
        className="todo-input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
}
