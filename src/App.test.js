import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AddTask from "./components/AddTask";
import TaskContainer from "./components/TaskContainer";
import Adapter from "enzyme-adapter-react-16";
import { mount,shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render AddTask and Task component", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([<AddTask />, <TaskContainer />])
    ).toEqual(true);
  });

  it("should start with an empty list", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("tasks")).toEqual([]);
  });

  it("adds Task to the state", () => {
    const wrapper = shallow(<App />);
    wrapper
      .instance()
      .handleAddTAsk({ id: 123, task: "what to do", chk: false });
    expect(wrapper.state("tasks")).toEqual([
      { id: 123, task: "what to do", chk: false }
    ]);
  });

  it('passes a bound function to AddTask component', () => {
    const wrapper = shallow(<App/>);
    const AddTask= wrapper.find("AddTask");
    const addItem = wrapper.instance().handleAddTAsk;
    expect(AddTask.prop("addTask")).toEqual(addItem);
  });

  it('passes some props to TaskContainer component', () => {
    const wrapper = shallow(<App/>);
    const TaskContainer= wrapper.find("TaskContainer");
    const onChecked = wrapper.instance().handleCheckTask;
    const onDelete = wrapper.instance().handleDeleteTask;
    expect(TaskContainer.prop("tasks")).toEqual(wrapper.state("tasks"));
    expect(TaskContainer.prop("onChecked")).toEqual(onChecked);
    expect(TaskContainer.prop("onDelete")).toEqual(onDelete);
  });

  xit('renders the items', () => {
    const wrapper = mount(<App/>);
    wrapper.instance().handleAddTAsk({ id: 123, task: "what to do", chk: false });
    wrapper.instance().handleAddTAsk({ id: 1234, task: "go carting", chk: true });
    expect(wrapper.find('li').length).toEqual(2);
  });
});
