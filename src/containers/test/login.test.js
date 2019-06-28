import React from "react";
import { mount, shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Login, { UnconnectedLoginComponent } from "../Login";

const initialState = {
    messageBox: {}
};

const mockStore = configureStore();

const setup = (props = {}) => {
    let store = mockStore(initialState);
    return mount(
        <StaticRouter>
            <Login store={store} />
        </StaticRouter>
    );
};

describe("Login component should be rendered", () => {
    test("login renders without error", () => {
        const wrapper = setup();
        const loginComponent = wrapper.find("[data-test='component-login']");
        expect(loginComponent.length).toBe(1);
    });
});

describe("Test case for testing login", () => {
    test("Username input", () => {
        const wrapper = setup();
        wrapper
            .find("[name='username']")
            .simulate("change", { target: { value: "testuser", name: "username" } });

        expect(wrapper.find("[name='username']").prop("value")).toBe("testuser");
    });

    test("Form submit", (done) => {
        const display_message = jest.fn();
        const set_token = token => {
            expect(token).toBe("token")
            done()
        }

        const history = {
            push: jest.fn()
        }
        const state = {
            username: "testuser",
            password: "password"
        }
        const loginFn = jest.fn((state, { }) => Promise.resolve("token"))
        const wrapper = shallow(<UnconnectedLoginComponent messageBox={{
            visible: true
        }} display_message={display_message} set_token={set_token} history={history} />)

        wrapper.instance().handleSubmit(loginFn)({
            preventDefault: jest.fn()
        })
    })
});

describe("Test case for LoginComponent functions", () => {
    test("should call display_message when onDismiss is called", () => {
        const display_message = jest.fn();
        const wrapper = shallow(<UnconnectedLoginComponent messageBox={{
            visible: true
        }} display_message={display_message} />)
        wrapper.instance().onDismiss()
        expect(display_message).toBeCalled()
        expect(display_message).toHaveBeenCalledWith({ visible: false })
    });
})