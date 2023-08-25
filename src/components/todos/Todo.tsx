import React from 'react';
import { TodosTypes } from '../../types/Todos.type';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
    todo: TodosTypes;
    deleteTodo: (id: string) => boolean;
    toggleCompelte: (id: string) => boolean;
}

const Todo = ({todo, toggleCompelte, deleteTodo}: TodoProps) => {

  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`}  onClick={() => toggleCompelte(todo.id)}// or completed className
      >
        {todo.title}
      </p>
      <div><FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/></div>
    </div>
  )
}

export default Todo
