import {
    REGISTERING,
    REGISTER_SUCCESS,
    REGISTRATION_FAILED,
    AUTHENTICATING,
    AUTHENTICATED,
    AUTHENTICATION_FAILED,
    LOGOUT
} from './types';
import axios from '../helpers/axiosConfig';

export const authenticate = ({ email, password }) => (dispatch) => {
    dispatch({ type: AUTHENTICATING });

    axios
        .post('/user/login', { email, password })
        .then((res) => {
            axios.defaults.headers.common['Authorization'] = res.data;
            dispatch({
                type: AUTHENTICATED,
                payload: { token: res.data }
            });
        })
        .catch((err) => {
            dispatch({ type: AUTHENTICATION_FAILED, payload: err.response.data });
        });
};

export const register = ({ email, password }) => (dispatch) => {
    dispatch({ type: REGISTERING });

    axios
        .post('/user/register', { email, password })
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({ type: REGISTRATION_FAILED, payload: err.response.data });
        });
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
