import React from "react";
import TaskContainer from "./components/TaskContainer";
import TaskList from "./components/TaskList";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {mount,shallow,configure} from "enzyme";

describe('TaskContainer', () => {
  it('should render div which class name is tasks', () => {
    const wrapper = shallow(<TaskContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <div className="tasks"/>,
    ])).toEqual(true);
  });
});