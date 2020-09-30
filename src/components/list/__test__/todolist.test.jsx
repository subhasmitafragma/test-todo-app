import React from "react";
import { shallow, mount } from "enzyme";
import TodoList from "../TodoList";

const todos = [{ text: "hello", checked: false }];
describe("layout component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoList items={todos} />);
  });

  it("renders list", () => {
    expect(wrapper.find("TodoListItem").length).toBe(todos.length);
  });

  it("renders list", () => {
    expect(wrapper.find("TodoListItem").at(0).key()).toBe("0");
  });
});
