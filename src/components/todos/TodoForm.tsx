import React, { useState } from 'react'

type TodoFormProps = {
  addTodo: (title: string) => boolean
}

const TodoForm = ({ addTodo }: TodoFormProps) => {

    const [value, setValue] = useState<string>('');

    const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value) {
            addTodo(value);
            setValue("");
        }
  }

  return (
    <form className="TodoForm" onSubmit={submitHandle}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}

export default TodoForm
