import { LOADING_DATA, GET_JOKES } from '../_actions/types';

const initialState = {
    loadingData: false,
    jokes: []
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loadingData: true
            };
        case GET_JOKES:
            return {
                ...state,
                jokes: [...action.payload]
            };
        default:
            return { ...state };
    }
};
