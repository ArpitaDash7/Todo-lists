import React from 'react';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <span className="edit-icon" role="img" aria-label="edit" onClick={() => editTodo(task.id)}>
                    ✏️
                </span>
                <span className="delete-icon" role="img" aria-label="delete" onClick={() => deleteTodo(task.id)}>
                    🗑️
                </span>
            </div>
        </div>
    );
};