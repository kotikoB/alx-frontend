import { LOADING_DATA, GET_ANIME } from './types';
import axios from '../helpers/axiosConfig';

export const getAnime = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/random').then((res) => {
        dispatch({ type: GET_ANIME, payload: res.data });
    });
};
