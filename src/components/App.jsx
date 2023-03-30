import { useRef, useState,useEffect, useMemo } from 'react';
import NoTodos from './NoTodos.jsx';
import '../reset.css';
import '../App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

function App() {
  const [name, setName] = useState('');
  const nameInputEl = useRef(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ]);

  
const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(todo){
    // con el arrata incializado con "..." puntos antes, quiere decier que estamos agregando un nuevo elemento al array tal cual este en ese momento.
    setTodos([...todos, {
        id: idForTodo,
        title: todo,
        isComplete: false,
    }])

    
    setIdForTodo(prevIdForTodo => prevIdForTodo +1);

  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }



  function completeTodo(id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

  function markAsEditing(id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = true;
      }

      return todo;
    })

    setTodos(updatedTodos);
  }
  
  function updateTodo(event, id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        if(event.target.value.trim().length === 0){
          todo.isEditing = false;
          return todo;
        }

        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

function cancelEdit(event,id){
  const updatedTodos = todos.map(todo => {
    if(todo.id === id){
      todo.isEditing = false;
    }

    return todo;
  })

  setTodos(updatedTodos);
}

function remainingCalculation() {
  console.log('calculating remaining todos. This is slow.')
  return todos.filter(todo => !todo.isComplete).length;
}

// useMemo, sirve para ejecutar las funciones en donde deben de ejecutarse y no desde que la aplicacion cargue.
// El segundo parametro es para indicar que objeto/array estara cambiando y cuando este cambie se ejecute la funcion.
const remaining = useMemo(remainingCalculation, [todos]);

function clearCompleted() {
  setTodos([...todos].filter(todo => !todo.isComplete));
}

function completeAllTodos() {
  const updatedTodos = todos.map(todo => {
    
      todo.isComplete = true;

    return todo;
  })

  setTodos(updatedTodos);
}

function todosFiltered(filter) {
if(filter === 'all'){
return todos;
} else if(filter === 'active') {
return todos.filter(todo => !todo.isComplete);
} else if(filter === 'completed'){
  return todos.filter(todo => todo.isComplete);
}

}

useEffect (()=>{
  console.log('use effect running');
  nameInputEl.current.focus();

  return function cleanup(){
console.log('cleaning up');
  };
  // sin los corchetes ", []" se ejecuta en cualquier elemento/cambia cualquier estado.
}, []);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2>What is your name?</h2>
          
          <form action='#'>
            <input 
            type="text" 
            ref={nameInputEl}
            className='todo-input' 
            placeholder='What is your name?'
            value={name}
            onChange={event => setName(event.target.value)}
             />
          </form>
          {name && <p className="name-label">Hello, {name}</p>}
        </div>
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo}/>

{todos.length > 0 ? (
      <TodoList 
      todos={todos}
      completeTodo={completeTodo}
      markAsEditing={markAsEditing}
      updateTodo={updateTodo}
      cancelEdit={cancelEdit}
      deleteTodo={deleteTodo}
      remaining={remaining}
      clearCompleted={clearCompleted}
      completeAllTodos={completeAllTodos}
      todosFiltered={todosFiltered}
      />
        ) : (
          <NoTodos />

          
        )}
      </div>
    </div>
  );
}

export default App;