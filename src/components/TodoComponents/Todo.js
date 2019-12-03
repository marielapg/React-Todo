import React, {Component} from 'react';

class Todo extends Component {

    render(){
        return (
    <div>
        <p>{this.props.todo.task}</p>
    </div>
        )
    } 
}
export default Todo;

//     <div className="App">
    // <h1>Todo App</h1>
    // <h2>Lets build out some handler functions.</h2>
    // <button onClick={this.singleClickHandler}>Click Handler</button>
    // <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
    // <input onChange={this.changeHandler} placeholder="Change my input" />
    
    // </div>