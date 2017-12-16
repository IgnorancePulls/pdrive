import * as userActions from '../actions/users.list.actions';
import {ORDER_FIELD_KEY} from '../constatns/custom.fields';

const initialState = {
    users: [],
    loading: false,
    hasError: false,
    additionalData: null,
    userDeleted: false
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
                loading: true,
                hasError: false,
            };
        case userActions.SAVE_USER_INDEX_COMPLETED:
            return {
                ...state,
                loading: false,
                hasError: false,
            };

        case userActions.SAVE_USER_INDEX_FAILED:
            return {
                ...state,
                loading: false,
                hasError: true,
            };
        case userActions.DELETE_USER:
            return {
                ...state,
                loading: true,
                hasError: false,
                userDeleted: false
            };
        case userActions.DELETE_USER_COMPLETED:
            return {
                ...state,
                loading: false,
                hasError: false,
                userDeleted: true
            };
        case userActions.DELETE_USER_FAILED:
            return {
                ...state,
                loading: false,
                hasError: true,
                userDeleted: false
            };
        default:
            return state;
    }
};