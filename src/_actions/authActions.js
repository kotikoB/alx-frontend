import { AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED } from './types';
import axios from '../helpers/axiosConfig';

export const authenticate = ({ email, password }) => (dispatch) => {
    dispatch({ AUTHENTICATING });

    const body = JSON.stringify({ email, password });
    axios
        .post('/api', body)
        .then((res) =>
            dispatch({
                type: AUTHENTICATED,
                payload: res.data
            })
        )
        .catch(dispatch({ AUTHENTICATION_FAILED }));
};
