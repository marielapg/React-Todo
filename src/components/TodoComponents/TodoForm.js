import React, {Component} from 'react';

class TodoForm extends Component {

    constructor() {
    super();
    this.state = {
      newTodo: '',
    }
  }


    changeHandler = event => {
    this.setState({newTodo: event.target.value});
  };

  render() {
       
    return (
      <div className="Form">
          <label htmlFor="task">New Todo</label>
        <input 
        type="text"
        name="task"
        id="task"
        value={this.state.newTodo}
        onChange={this.changeHandler}
        />
      </div>  
    )
    }
}    
  export default TodoForm;