import actionTypes from "./actionTypes";

export const display_meetups = meetups => {
    return {
        type: actionTypes.MEETUPS,
        payload: [...meetups]
    }
}