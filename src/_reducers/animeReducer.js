import { LOADING_DATA, GET_ANIME } from '../_actions/types';

const initialState = {
    loadingData: false,
    anime: []
};

export function animeReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loadingData: true
            };
        case GET_ANIME:
            return {
                ...state,
                loadingData: false,
                anime: [...action.payload]
            };
        default:
            return { ...state };
    }
}
