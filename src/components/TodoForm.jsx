import React, {useState, useContext} from 'react'
import { TodosContext } from '../context/TodosContext';


function TodoForm() {
  const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext);


    const [todoInput, setTodoInput] = useState('');

    function handleInput(event){
        setTodoInput(event.target.value);
      }

      function addTodo(event){
        event.preventDefault();

        if(todoInput.trim().length === 0) {
          return;
        }

    // con el arrata incializado con "..." puntos antes, quiere decier que estamos agregando un nuevo elemento al array tal cual este en ese momento.
    setTodos([...todos, {
      id: idForTodo,
      title: todoInput,
      isComplete: false,
  }])

  
  setIdForTodo(prevIdForTodo => prevIdForTodo +1);

        setTodoInput('');
      }
    
  return (
    <form action="#" onSubmit={addTodo}>
      
    <input
      type="text"
      value={todoInput}
      onChange={handleInput}
      className="todo-input"
      placeholder="What do you need to do?"
    />
  </form>
  );
}



export default TodoForm
