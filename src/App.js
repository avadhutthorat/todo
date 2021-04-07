import React, { Component } from "react";
import Todo from "./Todo";
import UserInput from "./UserInput";
import "./app.css";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "buy milk" },
      { id: 2, content: "create todo app" },
    ],
  };

  changeToInput = (id) => {
    const todo = this.state.todo.map((todo) => {
      if (todo.id === id) {
        todo.editable = true;
      }
      return todo;
    });

    this.setState({ todo });
  };

  saveData = (data) => {
    const edit = this.state.todo.filter((todo) => {
      return todo.editable;
    });
    console.log(edit);
    const todo = [
      ...this.state.todo,
      { ...edit[0], content: data, editable: false },
    ];
  };

  addtodoHandler = (content) => {
    console.log(content);
    content.id = Math.random() * 10;
    let todo = [...this.state.todo, content];

    this.setState({ todo });
  };

  render() {
    // const array = [1, 2, "Avadhut", 4];
    // const [, , third] = array;
    // console.log(third);
    // const user = {
    //   id: 1,
    //   name: "John Doe",
    //   address: {
    //     city: {
    //       name: "Pune",
    //     },
    //   },
    // };
    // const {
    //   name,
    //   address: {
    //     city: { name: cityName },
    //   },
    // } = user;
    // console.log(name, cityName);

    const array = [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Doe",
      },
      {
        id: 3,
        name: "Bob Marsh",
      },
      {
        id: 4,
        name: "John Doe",
      },
    ];

    // const arr = [];

    // array.map((item) => {
    //   if (!arr.includes(item.name)) {
    //     arr.push(item.name);
    //   }
    // });

    const names = [...new Set(array.map((item) => item.name))];
    console.log(names);
    return (
      <div className="todo-app-container">
        <div id="div1">Div1</div>
        <div id="div2">Div2</div>
        <div id="div3">Div3</div>
        <div id="div4">Div4</div>
        {/* <h1 className="center green-text">Todo's</h1>
        <Todo
          todo={this.state.todo}
          changeToInput={this.changeToInput}
          saveData={this.saveData}
        />
        <UserInput addTodo={this.addtodoHandler} /> */}
      </div>
    );
  }
}

export default App;
