import {
    REGISTER_SUCCESS,
    REGISTERING,
    REGISTRATION_FAILED,
    AUTHENTICATING,
    AUTHENTICATED,
    AUTHENTICATION_FAILED,
    LOAD_USER,
    LOGOUT
} from '../_actions/types';

const initialState = {
    authenticated: false,
    authenticating: false,
    registering: false,
    authToken: null,
    errorMessage: '',
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
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                authenticating: false
            };

        case AUTHENTICATION_FAILED:
            return {
                ...state,
                authenticated: false,
                authenticating: false,
                errorMessage: action.payload
            };

        case LOGOUT:
            return {
                ...state,
                authenticated: false
            };
        case REGISTERING:
            return {
                ...state,
                registering: true
            };

        case REGISTRATION_FAILED:
            return {
                registering: false
            };
        default:
            return state;
    }
};
