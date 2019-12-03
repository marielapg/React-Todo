// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
console.log (props)
        return (
            <div className="List">
            {props.todoItems.map(item =>(
            <Todo 
            key={item.id}
            todo={item}
            />
            ))}
            </div>
        )
    
}

export default TodoList;