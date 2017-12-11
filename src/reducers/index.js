import {combineReducers} from 'redux';

import {reducer as formReducer} from 'redux-form'

import {usersReducer} from './users.reducer';
import {layoutReducer} from './layout.reducer';
import {userReducer} from './user.reducer';

export default combineReducers({
    usersReducer,
    layoutReducer,
    userReducer,
    form: formReducer
});