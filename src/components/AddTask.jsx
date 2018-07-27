import React, { Component } from "react";
import uuid from "uuid";
export default class AddTask extends Component {
  handlerSubmit = e => {
    if (this.refs.todoTitle.value === "") {
      alert("task required");
    } else {
      let newtask = {
        id: uuid.v4(),
        task: this.refs.todoTitle.value,
        chk: false
      };
      this.props.addTask(newtask);
    }
    this.refs.todoTitle.value = "";

    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label className="heading">Todo-List</label>
        <br />
        <br />
        <input
          ref="todoTitle"
          className="textBox"
          type="text"
          placeholder="Enter task to add in todos"
          autoFocus
        />
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
    );
  }
}
