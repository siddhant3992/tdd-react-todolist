import React from "react";
import ReactDom from "react-dom";
import AddTask from "./components/AddTask";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("TaskContainer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AddTask />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it("should contain form element", () => {
    const wrapper = shallow(<AddTask />);
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("passes a bound function to form", () => {
    const wrapper = shallow(<AddTask />);
    expect(wrapper.find("form").prop("onSubmit")).toEqual(
      wrapper.instance().handlerSubmit
    );
  });

  it("should call handlerSubmit when Add is clicked", () => {
    const spy = jest.fn();
    const wrapper = mount(<AddTask addTask={spy} />);
    wrapper.find(".textBox").instance().value = "hello";
    wrapper.find(".subBtn").simulate("submit");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
