import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("App component html matches the snapshot", () => {
  const component = shallow(<App />);

  expect(component.getElements()).toMatchSnapshot();
});

test("App component should render a div with classname App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App")).toHaveLength(1);
});
