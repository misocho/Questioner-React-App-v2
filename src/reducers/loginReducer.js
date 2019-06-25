import actionTypes from "../actions/actionTypes";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
};