import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { jokeReducer } from './jokeReducer';
import { animeReducer } from './animeReducer';

export default combineReducers({
    auth: authReducer,
    jokes: jokeReducer,
    anime: animeReducer
});
