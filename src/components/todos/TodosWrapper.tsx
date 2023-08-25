import React, { useState } from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'

import { TodosTypes } from '../../types/Todos.type'

const TodosWrapper = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([])

  const addTodos = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ])

    return true
  }

    const deleteTodo = (id: string) => {
      return true
  }

    const toggleCompelte = (id: string) => {
      return true
  }

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      <TodoForm addTodo={addTodos} />

      {todos.map((todo) => (
        <Todo todo={todo} toggleCompelte={toggleCompelte} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodosWrapper
