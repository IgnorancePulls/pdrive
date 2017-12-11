import {createAction} from '../helper/action.creator';
import {getUsers, deleteUser, updateUser} from '../services/users.service';
import {indexUsers} from '../helper/indexer';
import * as layoutActions from './layout.actions';

export const GET_USER_LIST = '[USER LIST] Get user list';
export const GET_USER_LIST_COMPLETED = '[USER LIST] Get user list complete';
export const GET_USER_LIST_FAILED = '[USER LIST] Get user list failed';
export const CHANGE_USER_ORDER = '[USER_LIST] Change user order';
export const DELETE_USER = '[USER_LIST] Delete user';
export const DELETE_USER_COMPLETED = '[USER_LIST] Delete user completed';
export const DELETE_USER_FAILED = '[USER_LIST] Delete user failed';
export const SET_USER_INDEX = '[USER_LIST] Set user index';
export const SAVE_USER_INDEX = '[USER_LIST] Save user index';
export const SAVE_USER_INDEX_COMPLETED = '[USER_LIST] Save user index completed';
export const SAVE_USER_INDEX_FAILED = '[USER_LIST] Save user index failed';

export const GetUserList = createAction(GET_USER_LIST);
export const GetUserListCompleted = createAction(GET_USER_LIST_COMPLETED, 'payload');
export const GetUserListFailed = createAction(GET_USER_LIST_FAILED);

export const ChangeUserOrder = createAction(CHANGE_USER_ORDER, 'users');

export const DeleteUser = createAction(DELETE_USER);
export const DeleteUserCompleted = createAction(DELETE_USER_COMPLETED);
export const DeleteUserFailed = createAction(DELETE_USER_FAILED);

export const SetUserIndex = createAction(SET_USER_INDEX, 'userIndex', 'index');
export const SaveUserIndex = createAction(SAVE_USER_INDEX, 'userId');
export const SaveUserIndexCompleted = createAction(SAVE_USER_INDEX_COMPLETED);
export const SaveUserIndexFailed = createAction(SAVE_USER_INDEX_FAILED);

export function LoadUsers(start, limit) {
    return function (dispatch) {
        dispatch(GetUserList());

        return getUsers(start, limit).then(
            response => {
                const normalizedUsersData = Object.assign({}, response, {
                    data: indexUsers(response.data),
                    additionalData: response.additional_data
                });
                dispatch(GetUserListCompleted(normalizedUsersData))
            },
            error => dispatch(GetUserListFailed())
        )
    }
}


export function RemoveUser(userId) {
    return function (dispatch) {
        dispatch(DeleteUser());

        return deleteUser(userId).then(
            response => {
                dispatch(DeleteUserCompleted());
                dispatch(LoadUsers());
            },
            error => dispatch(DeleteUserFailed())
        )
    }
}

export function SaveUser(userId, updatedFields) {
    return function (dispatch) {
        dispatch(SaveUserIndex());

        return updateUser(userId, updatedFields).then(
            response => {
                dispatch(LoadUsers());
                dispatch(SaveUserIndexCompleted());
                dispatch(layoutActions.CloseNewUserForm());
            },
            error => {
                dispatch(SaveUserIndexFailed());
                dispatch(layoutActions.CloseNewUserForm());
            }
        )
    }
}
