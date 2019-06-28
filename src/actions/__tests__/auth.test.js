import React from "react";
import axios from "axios";

import { login, signup } from "../auth";
import { display_meetups } from "../meetups";

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
            expect(data).toEqual({
                data: {}
            })
        });

    });

    test("Signup function", () => {
        const props = {
            display_message: jest.fn()
        };

        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: {}
            })
        });
        signup({}, props).then(data => {
            expect(data).toEqual({
                data: {}
            });
        });
    });
})