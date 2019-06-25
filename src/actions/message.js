import actionTypes from "./actionTypes";

export const display_message = message => {
    return {
        type: actionTypes.DISPLAY_MESSAGE,
        payload: {
            message: message.message,
            color: message.color,
            visible: message.visible
        }
    };
};

export const set_token = token => ({
    type: actionTypes.LOGIN,
    payload: token
})