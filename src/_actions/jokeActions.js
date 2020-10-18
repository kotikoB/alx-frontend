import { LOADING_DATA, GET_JOKES } from '../_actions/types';
import axios from '../helpers/axiosConfig';

export const getJokes = () => (dispatch) => {
    axios.get('/').then((res) => {
        dispatch({
            type: GET_JOKES,
            payload: res.data
        });
    });
};
