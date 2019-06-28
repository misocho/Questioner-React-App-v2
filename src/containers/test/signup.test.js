import React from "react";
import { mount, shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import Signup, { UnconnectedSigupComponent } from "../Signup";

const initialState = {
    messageBox: {}
};

const mockStore = configureStore();
let store;


beforeEach(() => {
    store = mockStore(initialState);
});
const setup = (props = {}) => {
    return mount(
        <StaticRouter> 
            <Signup {...{ store }} />
        </StaticRouter>
    );
};

describe("Signup component should be rendered", () => {
    test("Signup renders without error", () => {
        const wrapper = setup();
        const signupComponent = wrapper.find("[data-test='component-signup']");
        expect(signupComponent.length).toBe(1);
    });
});

describe("Test case for testing signup", () => {
    test("Username input", () => {
        const wrapper = setup();
        wrapper
            .find("[data-test='username-input']")
            .simulate("change", { target: { value: "testuser", name: "username" } });
        expect(wrapper.find("[data-test='username-input']").prop("value")).toBe("testuser");
    });

    test("Form submit", () => {
        const display_message = jest.fn();
        const signupfn = jest.fn(() => { });
        const wrapper = shallow(<UnconnectedSigupComponent messageBox={{
            visible: true
        }} display_message={display_message} />)

        wrapper.instance().handleSubmit(signupfn)({
            preventDefault: jest.fn()
        })
    })
});

describe("Test case for signupComponent functions", () => {
    test("should call display_message when onDismiss is called", () => {
        const display_message = jest.fn();
        const wrapper = shallow(<UnconnectedSigupComponent messageBox={{
            visible: true
        }} display_message={display_message} />)
        wrapper.instance().onDismiss()
        expect(display_message).toBeCalled();
        expect(display_message).toHaveBeenCalledWith({ visible: false })

    })
})