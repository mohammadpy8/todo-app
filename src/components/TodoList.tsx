import React, { useEffect, useRef } from 'react'
import Todo from './Todo'
import { Todo as TodoType } from '../types/Todo.type'

type TodoListProps = {
  todos: TodoType[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const elem = useRef<HTMLInputElement>(null)

  useEffect(() => {
    elem.current?.focus()
  }, [])

  return (
    <>
      <input type="text" placeholder="Todo Title" ref={elem} />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
