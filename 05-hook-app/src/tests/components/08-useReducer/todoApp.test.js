import React from "react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("test in <todoApp/>", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});
  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should addTodo", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp: (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    // expect(localStorage.setItem).toHaveBeenCalledWith();
  });
  test("should deleted Todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp: (1)");
    wrapper.find("TodoList").prop("handleRemove")(demoTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp: (0)");
  });
});
