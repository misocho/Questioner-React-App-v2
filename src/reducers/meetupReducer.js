
import actionTypes from "../actions/actionTypes";

export const meetupsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.MEETUPS:
            return action.payload
        default:
            return state;
    }
};