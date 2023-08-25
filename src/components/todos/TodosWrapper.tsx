import React, { useState } from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'

import { TodosTypes } from '../../types/Todos.type'
import swal from 'sweetalert'

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

        swal({
            title: "آیا از حدف مطمعن هستید.",
            icon: "warning",
            buttons: ["نه", "آره"]
        }).then(result => {
            console.log(result);
            if (result) {
                setTodos(todos.filter(todo => todo.id !== id));
                
                swal({
                    title: "حذف با موفقیت انجام شد:)",
                    icon: "success",
                })
            }
        });
        return true;
  }

    const toggleCompelte = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo));
        return true;
  }

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      <TodoForm addTodo={addTodos} />

      {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompelte={toggleCompelte} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodosWrapper
