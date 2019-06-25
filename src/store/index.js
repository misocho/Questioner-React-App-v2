import React from 'react';
import { createStore, combineReducers } from 'redux';
import { messageReducer } from '../reducers/messageReducer.js';
import { loginReducer } from '../reducers/loginReducer';

export const store = createStore(
    combineReducers({
        messageBox: messageReducer,
        user: loginReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);