import { ADD_LAWYER, GET_LAWYERS, DELETE_LAWYER } from '../_actions/types';

const initialState = {
    lawyers: [],
    lawyer: {}
};

export const lawyerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAWYERS:
            return {
                ...state,
                lawyers: action.payload
            };
        case ADD_LAWYER:
            return {
                ...state,
                lawyer: action.payload
            };
        case DELETE_LAWYER:
            return {
                ...state,
                lawyers: state.lawyers.filter((lawyer) => lawyer.id !== action.payload)
            };
        default:
            return state;
    }
};
