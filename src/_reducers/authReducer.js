import {
    REGISTER_SUCCESS,
    REGISTERING,
    REGISTRATION_FAILED,
    AUTHENTICATING,
    AUTHENTICATED,
    AUTHENTICATION_FAILED,
    LOAD_USER
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
            case REGISTER_SUCCESS:
                localStorage.setItem('token', action.payload.token);
                return {
                ...state,
                ...action.payload,
                authenticated: true,
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
        case REGISTER_SUCCESS:
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
