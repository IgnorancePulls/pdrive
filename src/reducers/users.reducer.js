import * as userActions from '../actions/users.list.actions';
import {ORDER_FIELD_KEY} from '../constatns/custom.fields';

const initialState = {
    users: [],
    loading: false,
    hasError: false,
    additionalData: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActions.GET_USER_LIST:
            return {
                ...state,
                loading: true,
                hasErrors: false
            };
        case userActions.GET_USER_LIST_COMPLETED:
            return {
                ...state,
                loading: false,
                hasError: false,
                users: action.payload.data || [],
                additionalData: action.payload.additional_data
            };
        case userActions.GET_USER_LIST_FAILED:
            return {
                ...state,
                loading: false,
                hasError: true
            };
        case userActions.CHANGE_USER_ORDER:
            return {
                ...state,
                users: action.users
            };
        case userActions.SET_USER_INDEX:
            return {
                ...state,
                users: state.users.map((user, i) => {
                    if (i === action.userIndex) {
                        return Object.assign({}, user, {
                            [ORDER_FIELD_KEY]: action.index,
                            notSaved: true
                        });
                    }
                    return user;
                })
            };
        case userActions.SAVE_USER_INDEX:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user === action.userId) {
                        return Object.assign({}, user, {
                            loading: true,
                            hasError: false
                        })
                    }
                })
            };
        case userActions.DeleteUser:
            return {
                ...state,
                loading: true,
                hasError: false
            };
        case userActions.DeleteUserCompleted:
            return {
                ...state,
                loading: false,
                hasError: false
            };
        case userActions.DeleteUserFailed:
            return {
                ...state,
                loading: false,
                hasError: true
            };
        default:
            return state;
    }
};