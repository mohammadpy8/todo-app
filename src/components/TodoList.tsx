import React from 'react';
import Todo from './Todo';
import { Todo as TodoType } from '../types/Todo.type';

type TodoListProps = {

    todos: TodoType[];

};

const TodoList : React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;