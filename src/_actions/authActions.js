import {
    REGISTER,
    REGISTERING,
    REGISTRATION_FAILED,
    AUTHENTICATING,
    AUTHENTICATED,
    AUTHENTICATION_FAILED
} from './types';
import axios from '../helpers/axiosConfig';

export const authenticate = ({ email, password }) => (dispatch) => {
    dispatch({ type: AUTHENTICATING });

    axios
        .post('/user/login', { email, password })
        .then((res) => {
            console.log('login res', res);
            dispatch({
                type: AUTHENTICATED,
                payload: res.data
            });
        })
        .catch((err) => {
            console.error('login err', err.response);
            dispatch({ type: AUTHENTICATION_FAILED, payload: err.response.data });
        });
};

export const register = ({ email, password }) => (dispatch) => {
    dispatch({ type: REGISTERING });

    axios
        .post('/user/register', { email, password })
        .then((res) => {
            console.log('signup response', res);
            dispatch({
                type: REGISTER,
                payload: res.data
            });
        })
        .catch((err) => {
            console.error('register error -> ', err.response.data);
            dispatch({ type: REGISTRATION_FAILED, payload: err.response.data });
        });
};

export const logout = () => 'LOGOUT';
