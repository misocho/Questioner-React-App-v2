import actionTypes from "../../actions/actionTypes";
import { messageReducer } from "../messageReducer";

describe("Tests for message reducer", () => {
    test("messageBox initial state should be an empty list", () => {
        const newState = messageReducer(undefined, {});
        expect(newState).toEqual({});
    });

    test("Should return a messageBox object", () => {
        const message = {
            message: "Invalid username or password",
            color: "danger",
            visible: true
        };

        const newState = messageReducer(undefined, {
            type: actionTypes.DISPLAY_MESSAGE,
            payload: message
        });

        expect(newState).toEqual(message);
    })
});