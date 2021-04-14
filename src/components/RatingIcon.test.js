import React from "react";
import { shallow } from "enzyme";
import RatingIcon from "./RatingIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

test("RatingIcon component html matches the snapshot ", () => {
  const wrapper = shallow(<RatingIcon />);
  expect(wrapper.getElements()).toMatchSnapshot();
});

test("Rating component should FontAwesomeIcon Icon", () => {
  const wrapper = shallow(<RatingIcon />);
  expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
});

test("Rating component should render a div with classname cursor-pointer", () => {
  const wrapper = shallow(<RatingIcon />);
  expect(wrapper.find(".cursor-pointer")).toHaveLength(1);
});
