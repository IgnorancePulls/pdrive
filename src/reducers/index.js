import {combineReducers} from 'redux';

import { reducer as formReducer } from 'redux-form'

import {usersReducer} from './users.reducer';
import {layoutReducer} from './layout.reducer';
import {newUserFormReducer} from './new.user.form.reducer'

export default combineReducers({
    usersReducer,
    layoutReducer,
    newUserFormReducer,
    form: formReducer
});