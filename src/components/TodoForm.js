import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            setError('Enter your task');
            return;
        }
        addTodo(value);
        setValue('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='What is the task today?'
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );
};