import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { lawyerReducer } from './lawyerReducer';
import { institutionReducer } from './institutionReducer';

export default combineReducers({
    auth: authReducer,
    lawyers: lawyerReducer,
    institutions: institutionReducer
});
