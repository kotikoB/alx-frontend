import { IS_AUTHENTICATING, SET_AUTHENTICATED, AUTHENTICATION_FAILED } from './types';
import axios from '../helpers/axiosConfig';

export const authenticate = ({ email, password }) => (dispatch) => {
    dispatch({ IS_AUTHENTICATING });

    const body = JSON.stringify({ email, password });
    axios
        .post('/api', body)
        .then((res) =>
            dispatch({
                type: SET_AUTHENTICATED,
                payload: res.data
            })
        )
        .catch(dispatch({ AUTHENTICATION_FAILED }));
};
