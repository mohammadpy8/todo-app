import React from 'react';

import { Todo as TodoType } from './TodoList';

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({ id, title, isComplte, color, children }) => {
    
    const styles: React.CSSProperties = {
        fontSize: "3.5rem",
        backgroundColor: color,
    }

    return (
        <ul style={styles}>
            <h2>title: {title}</h2>
        </ul>
    );
};

export default Todo;