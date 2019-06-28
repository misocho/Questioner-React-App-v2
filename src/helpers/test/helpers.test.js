import React from "react";
import axios from "axios";

import { Post } from "../helpers";

jest.spyOn(axios, 'post');

describe("Test for helpers", () => {
    test("Post axios", () => {
        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: []
            })
        })

        Post({}, "").then(data => {
            expect(data).toEqual({
                data: []
            })
        })
    })
})