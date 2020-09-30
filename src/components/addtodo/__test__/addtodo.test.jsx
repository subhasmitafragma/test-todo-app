import React from "react";
import { shallow, mount } from "enzyme";
import AddTodo from "../Addtodo";

describe("todoform component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTodo />);
  });

  it("render click event", () => {
    wrapper.find("#primary").simulate("click");

    expect(wrapper.find("#primary").text()).toBe("Add");
  });
});
