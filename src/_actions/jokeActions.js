import { LOADING_DATA, GET_JOKES } from '../_actions/types';
import axios from '../helpers/axiosConfig';

export const getJokes = () => (dispatch) => {
    axios.get('/').then((res) => {
        console.log('jokes in actions file', res.data);
        dispatch({
            type: GET_JOKES,
            payload: res.data
        });
    });
};
