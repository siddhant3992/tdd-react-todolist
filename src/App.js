import React, { Component } from "react";
import AddTask from "./components/AddTask";
import TaskContainer from "./components/TaskContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  handleAddTAsk = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDeleteTask = id => {
    let task = this.state.tasks.slice();
    let index = task.findIndex(x => x.id === id);
    task.splice(index, 1);
    this.setState({ tasks: task });
  };

  handleCheckTask = (id, checkVal) => {
    let arr = this.state.tasks.slice();
    let index = arr.findIndex(x => x.id === id);
    arr[index].chk = checkVal;
    this.setState({ tasks: arr });
  };

  render() {
    return (
      <div className="app">
        <AddTask addTask={this.handleAddTAsk} />
        <TaskContainer
          tasks={this.state.tasks}
          onChecked={this.handleCheckTask}
          onDelete={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
