import React, { Component } from "react";
class UserInput extends Component {
  state = {
    content: ""
  };

  changeHandler = e => {
    this.setState({ content: e.target.value });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: " " });

    //addTodo(this.state.content);
  };
  render() {
    // const { addTodo } = this.props;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>Add todo : </label>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default UserInput;
