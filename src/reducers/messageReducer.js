import actionTypes from "../actions/actionTypes";

export const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_MESSAGE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};