import { AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED } from '../_actions/types';

const initialState = { authenticated: false, authenticating: false };

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
                loginInfo: action.payload,
                authenticating: false
            };
        case AUTHENTICATION_FAILED:
            return {
                ...state,
                authenticated: false,
                authenticating: false
            };
        default:
            return state;
    }
};
