import React from "react";
import ReactDom from "react-dom";
import TaskContainer from "./components/TaskContainer";
import TaskList from "./components/TaskList";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow, configure } from "enzyme";

describe("<TaskContainer/>", () => {
  it("Checking renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TaskContainer />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("should render div which class name is tasks", () => {
    const wrapper = shallow(<TaskContainer />);
    expect(
      wrapper.containsAllMatchingElements([<div className="tasks" />])
    ).toEqual(true);
  });
  it("passes a bound function to AddTask component", () => {
    const wrapper = shallow(<TaskContainer tasks={[]} />);
    expect(wrapper.find(TaskList).length).toEqual(0);
  });

  it("passes a bound function to AddTask component", () => {
    const wrapper = shallow(<TaskContainer tasks={[]} />);
    expect(wrapper.find(TaskList).length).toEqual(0);
  });

  it("passes a bound function to AddTask component", () => {
    let item = [{ task: "what" }, { task: "to" }];
    const wrapper = shallow(<TaskContainer tasks={item} />);
    expect(wrapper.find(TaskList).length).toEqual(2);
  });
});
