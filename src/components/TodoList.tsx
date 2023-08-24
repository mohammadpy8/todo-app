import React from 'react';
import Todo from './Todo';

export type Todo = {
    id: string;
    title: string;
    isComplte: boolean;
    color: string;
}

type TodoListProps = {

    todos: Todo[];

}

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