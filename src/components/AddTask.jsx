import React, { Component } from "react";
import uuid from "uuid";
export default class AddTask extends Component {
  handlerSubmit(e) {
    if (e.target[0].value === "") {
      alert("task required");
    } else {
      let newtask = {
        id: uuid.v4(),
        task: e.target[0].value,
        chk: false
      };
      this.props.addTask(newtask);
    }
    e.target[0].value = "";

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <label className="heading">Todo-List</label>
        <br />
        <br />
        <input
          className="textBox"
          type="text"
          placeholder="Enter task to add in todos"
          autoFocus
        />
      </form>
    );
  }
}
