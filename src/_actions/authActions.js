import { LOGIN, LOGOUT } from './types';

localStorage.setItem(
    'isAuthenticated',
    JSON.stringify({
        isAuthenticated: true
    })
);

const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

export const login = () => (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: isAuthenticated
    });
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
        payload: !isAuthenticated
    });
};
