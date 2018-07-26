import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow} from "enzyme";
import {expect} from "chai";

describe("<App/>",function(){
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains an <AddTask/> component", function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(AddTask)).to.have.length(1);
  });

  it("contains an <Task/> component", function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Task)).to.have.length(1);
  });
});