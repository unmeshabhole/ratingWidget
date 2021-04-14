import React from "react";
import { shallow } from "enzyme";
import Rating from "./Rating";
import RatingIcon from "./RatingIcon";

test("Rating component html matches the snapshot ", () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

test("Rating component should render 5 Rating Icons", () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper.find(RatingIcon)).toHaveLength(5);
});

test("Rating component should render a div with classname hideDiv at the start", () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper.find(".hideDiv")).toHaveLength(1);
});
