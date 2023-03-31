import React, { useContext, useMemo } from 'react'
import { TodosContext } from '../context/TodosContext';


function TodoItemsRemaining() {
  

  const {todos} = useContext(TodosContext);

  function remainingCalculation() {
    console.log('calculating remaining todos. This is slow.')
    return todos.filter(todo => !todo.isComplete).length;
  }
  
  // useMemo, sirve para ejecutar las funciones en donde deben de ejecutarse y no desde que la aplicacion cargue.
  // El segundo parametro es para indicar que objeto/array estara cambiando y cuando este cambie se ejecute la funcion.
  const remaining = useMemo(remainingCalculation, [todos]);

  return (
    <span>{remaining} items remaining</span>
  )
}

export default TodoItemsRemaining