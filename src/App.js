import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask/>
        <Task/>
      </div>
    );
  }
}

export default App;
