import {
    REGISTER,
    REGISTERING,
    REGISTRATION_FAILED,
    AUTHENTICATING,
    AUTHENTICATED,
    AUTHENTICATION_FAILED
} from '../_actions/types';

const initialState = {
    authenticated: false,
    authenticating: false,
    registering: false,
    authToken: null,
    newUser: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATING:
            return {
                ...state,
                authenticating: true
            };
        case AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
                authToken: action.payload,
                authenticating: false
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                authenticated: false,
                authenticating: false
            };
        case REGISTERING:
            return {
                ...state,
                registering: true
            };
        case REGISTER:
            return {
                ...state,
                newUser: action.payload
            };
        case REGISTRATION_FAILED:
            return {
                registering: false
            };
        default:
            return state;
    }
};
