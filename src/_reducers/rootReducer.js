import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { jokeReducer } from './jokeReducer';

export default combineReducers({
    auth: authReducer,
    jokes: jokeReducer
});
