import React, { Component } from "react";
import TaskList from "./TaskList";

export default class Task extends Component {
  onDeleteTask = id => {
    this.props.onDelete(id);
  };
  checkedChecked = (checkVal, id) => {
    this.props.onChecked(checkVal, id);
  };
  render() {
    let taskItems = [];
    if (this.props.tasks) {
      taskItems = this.props.tasks.map(task => {
        let clsName = task.chk ? "checked-Task" : "unchecked-Task";
        return (
          <TaskList
            onDelete={this.onDeleteTask.bind(this, task._id)}
            onChecked={this.checkedChecked.bind(this, task._id)}
            cls={clsName}
            key={task.task}
            task={task}
          />
        );
      });
    }
    return <div className="tasks">{taskItems}</div>;
  }
}

