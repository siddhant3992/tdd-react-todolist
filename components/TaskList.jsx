import React, { Component } from "react";

export default class TaskList extends Component {
  deleteTask=()=>{
    this.props.onDelete(this.props.task.id);
  }

  checkChecked=(event)=>{
    let checkVal = event.target.checked;
    let id = this.props.task.id;
    this.props.onChecked(checkVal, id);
  }

  render() {
    return (
      <li className="taskList">
        <label className="checkBoxContainer">
          <input type="checkbox" onChange={this.checkChecked} />
          <span className="checkmark" />
        </label>
        <span className={this.props.cls}>{this.props.task.task}</span>
        <a
          className="deleteButton"
          href="#"
          onClick={this.deleteTask}
        >
          x
        </a>
      </li>
    );
  }
}
