import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";

test("HOme page renders without error", () => {
    const wrapper = shallow(<Home />);
    const homeComponent = wrapper.find("[data-test='component-home']");
    expect(homeComponent.length).toBe(1);
})