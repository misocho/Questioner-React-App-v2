import React from "react";
import { mount } from "enzyme";
import { StaticRouter } from "react-router-dom";

import Navigation from "../Navigation";

const setup = () => {
    return mount(
        <StaticRouter>
            <Navigation />
        </StaticRouter>
    );
};

describe("Navigation component should be rendered", () => {
    test("Navigation renders without error", () => {
        const wrapper = setup();
        const navigationComponent = wrapper.find("[data-test='component-navigation']");
        expect(navigationComponent.length).toBe(1);
    })
})