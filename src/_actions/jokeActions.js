import { LOADING_DATA, GET_JOKES } from '../_actions/types';
import axios from '../helpers/axiosConfig';

export const getJokes = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/').then((res) => {
        dispatch({
            type: GET_JOKES,
            payload: res.data
        });
    });
};
