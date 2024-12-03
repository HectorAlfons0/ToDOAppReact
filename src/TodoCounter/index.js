import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    return(
        <div className='TodoCounter'>
            <h1>
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
            </h1>
            {completedTodos === totalTodos && totalTodos > 0 && (
                <h2>¡Felicidades! Has completado todas tus tareas 🎉</h2>
            )}
        </div>
    );  
}

export { TodoCounter };