import React from 'react';

import { Todo as TodoType } from './TodoList';

const Todo = ({id, title, isComplte}:TodoType) => {
    return (
        <ul>
            <h2>title: {title}</h2>
        </ul>
    );
};

export default Todo;