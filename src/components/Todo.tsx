import React from 'react';

import { Todo as TodoType } from '../types/Todo.type';

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({ id, title, isComplte, color, children }) => {
    
    const styles: React.CSSProperties = {
        fontSize: "3.5rem",
        backgroundColor: color,
    };

    const clickHandler = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => event.preventDefault();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => event.preventDefault();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => event.preventDefault();

    return (
        <ul style={styles}>
            <h2 onClick={clickHandler}>title: {title}</h2>
            <form action="#" onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} />
            </form>
        </ul>
    );
};

export default Todo;