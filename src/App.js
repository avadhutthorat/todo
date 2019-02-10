import React, { Component } from "react";
import Todo from "./Todo";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "buy milk" },
      { id: 2, content: "create todo app" }
    ]
  };

  removeTodoHandler = id => {
    console.log(id);
    const todo = this.state.todo.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todo });
  };

  addtodoHandler = content => {
    console.log(content);
    content.id = Math.random() * 10;
    let todo = [...this.state.todo, content];

    this.setState({ todo });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center green-text">Todo's</h1>
        <Todo todo={this.state.todo} removeTodo={this.removeTodoHandler} />
        <UserInput addTodo={this.addtodoHandler} />
      </div>
    );
  }
}

export default App;
