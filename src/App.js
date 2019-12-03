import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Info from "./Info";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: Info,
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = taskName =>{

    const newTask={
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({ todoItems: [...this.state.todoItems, newTask]
    })
  }
  
  toggleComplete = taskID => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className="appContain">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
          <TodoList todoItems={this.state.todoItems}
          toggleComplete={this.toggleComplete} />
        </div>
      
     );
  }
  }
export default App;
