import React from "react";
import ReactDom from "react-dom";
import TaskList from "./components/TaskList";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("<TaskList/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TaskList task={"hi"} />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it("should contain input element and call a function on change", () => {
    const wrapper = shallow(<TaskList task={"hi"} />);
    const checkBox = wrapper.find("input");
    expect(checkBox.length).toEqual(1);
    expect(checkBox.prop("onChange")).toEqual(wrapper.instance().checkChecked);
  });

  it("passes a bound function to anchor tag", () => {
    const wrapper = shallow(<TaskList task={"hi"} />);
    const deleteButton = wrapper.find(".deleteButton");
    expect(deleteButton.prop("onClick")).toEqual(wrapper.instance().deleteTask);
  });
});
