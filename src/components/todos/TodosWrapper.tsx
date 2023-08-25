import React from 'react'

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodosWrapper = () => {
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      <TodoForm />
      <Todo />
    </div>
  )
}

export default TodosWrapper
