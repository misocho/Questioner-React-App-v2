import React from 'react';
import { createStore, combineReducers } from 'redux';
import { messageReducer } from '../reducers/messageReducer.js';
import { loginReducer } from '../reducers/loginReducer';
import { meetupsReducer } from '../reducers/meetupReducer';

export const store = createStore(
    combineReducers({
        messageBox: messageReducer,
        user: loginReducer,
        meetups: meetupsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);