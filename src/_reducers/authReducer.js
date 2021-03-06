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
import axios from '../helpers/axiosConfig';

const initialState = {
    authenticated: false,
    authenticating: false,
    registering: false,
    authToken: null,
    errorMessage: '',
    successMessage: '',
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
                message: action.payload
            };

        case LOGOUT:
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            return {
                ...state,
                authenticated: false
            };

        case REGISTERING:
            return {
                ...state,
                registering: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                successMessage: action.payload.message,
                newUser: { ...action.payload.user }
            };

        case REGISTRATION_FAILED:
            return {
                registering: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};
