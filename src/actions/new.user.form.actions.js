import {createAction} from '../helper/action.creator';
import {saveUser} from '../services/users.service';
import * as usersListActions from '../actions/users.list.actions';
import * as layoutActions from '../actions/layout.actions';

export const CHANGE_NEW_USER_FORM_INPUT_VALUE = '[NEW USER FORM] Change form input value';
export const SAVE_NEW_USER = '[NEW USER FORM] Save new user';
export const SAVE_NEW_USER_COMPLETED = '[NEW USER FORM] Save new user complete';
export const SAVE_NEW_USER_FAILED = '[NEW USER FORM] Save new user failed';

export const ChangeNewUserFormInputValue = createAction(CHANGE_NEW_USER_FORM_INPUT_VALUE, 'field', 'value');
export const SaveNewUser = createAction(SAVE_NEW_USER);
export const SaveNewUserCompleted = createAction(SAVE_NEW_USER_COMPLETED);
export const SaveNewUserFailed = createAction(SAVE_NEW_USER_FAILED);

export function SaveUser(userDetails) {
    return function (dispatch) {
        dispatch(SaveNewUser());

        const newUser = {
            ...userDetails,
            phone: [
                {
                    label: 'work',
                    value: userDetails.phone || '',
                    primary: true
                }
            ]
        };

        return saveUser(newUser).then(
            response => {
                dispatch(SaveNewUserCompleted());
                dispatch(usersListActions.LoadUsers());
                dispatch(layoutActions.CloseNewUserForm())
            },
            error => dispatch(SaveNewUserFailed())
        )
    }
}