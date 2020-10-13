import { ADD_INSTITUTION, GET_INSTITUTIONS, DELETE_INSTITUTION } from '../_actions/types';

const initialState = {
    institutions: [],
    institution: {}
};

export const institutionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INSTITUTIONS:
            return {
                ...state,
                institutions: action.payload
            };
        case ADD_INSTITUTION:
            return {
                ...state,
                institution: action.payload
            };
        case DELETE_INSTITUTION:
            return {
                ...state,
                institutions: state.institutions.filter((institution) => institution.id !== action.payload)
            };
        default:
            return state;
    }
};
