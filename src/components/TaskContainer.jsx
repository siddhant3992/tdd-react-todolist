import React, { Component } from "react";
import TaskList from "./TaskList";

export default class TaskContainer extends Component {
  onDeleteTask = id => {
    this.props.onDelete(id);
  };
  checkedOrNot = (id, checkVal) => {
    this.props.onChecked(checkVal, id);
  };
  render() {
    let taskItems = [];
    if (this.props.tasks) {
      taskItems = this.props.tasks.map(task => {
        let clsName = task.chk ? "checked-Task" : "unchecked-Task";
        return (
          <TaskList
            onDelete={this.onDeleteTask}
            onChecked={this.checkedOrNot}
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
