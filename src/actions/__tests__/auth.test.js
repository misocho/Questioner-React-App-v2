import axios from "axios";

import { login, signup } from "../auth";
import { display_meetups } from "../meetups";
import { display_message } from "../message";

jest.spyOn(axios, 'post');

describe("Tests for authentication functions", () => {
    test("Login function", () => {
        const props = {
            display_message: jest.fn()
        };
        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: {}
            })
        })
        login({}, props).then(data => {
            expect(display_message).toBeCalled()
        })
    });
    test("Signup function", () => {
        const props = {
            display_message: jest.fn()
        };

        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: { data: [] }
            })
        });
        signup({ data: [] }, props).then(() => {
            expect(display_message).toBeCalled()
        })
    });

    test("Signup function error", () => {
        const props = {
            display_message: jest.fn()
        };

        axios.post.mockImplementation(() => {
            return Promise.reject({
                data: {}
            })
        });
        signup({ data: [] }, props).then(() => {
            expect(display_message).toBeCalled()
        });
    });

    test("Login function error", () => {
        const props = {
            display_message: jest.fn()
        };

        axios.post.mockImplementation(() => {
            return Promise.reject({
                data: {}
            })
        });
        login({ data: [] }, props).then(() => {
            expect(display_message).toBeCalled()
        });
    });

});