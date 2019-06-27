import actionTypes from "../../actions/actionTypes";
import { loginReducer } from "../loginReducer";


describe("Tests for login reducer", () => {
    test("Login initial state should be an empty object", () => {
        const newState = loginReducer(undefined, {});
        expect(newState).toEqual({});
    });

    test("Should return a user object", () => {
        const token = {
            token: "This is a random token"
        };

        const newState = loginReducer(undefined, {
            type: actionTypes.LOGIN,
            payload: token['token']
        });
        expect(newState).toEqual(token)
    })
})