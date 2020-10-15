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
            dispatch({
                type: AUTHENTICATED,
                payload: res.data
            });
        })
        .catch((err) => dispatch({ type: AUTHENTICATION_FAILED, payload: err }));
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
            console.log('register error -> ', err);
            dispatch({ type: REGISTRATION_FAILED, payload: err });
        });
};

export const logout = () => 'LOGOUT';
