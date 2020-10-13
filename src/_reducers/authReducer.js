import { LOGIN, LOGOUT } from '../_actions/types';

const initialState = { isAuthenticated: false };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state;
    }
};
