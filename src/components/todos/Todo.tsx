import React from 'react';
import { TodosTypes } from '../../types/Todos.type';

type TodoProps = {
    todo: TodosTypes;
    deleteTodo: (id: string) => boolean;
    toggleCompelte: (id: string) => boolean;
}

const Todo = ({todo, toggleCompelte, deleteTodo}: TodoProps) => {

  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
    </div>
  )
}

export default Todo
