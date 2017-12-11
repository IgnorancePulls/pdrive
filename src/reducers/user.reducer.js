import * as newUserFormActions from '../actions/user.actions';

const initialState = {
    saved: false,
    hasError: false,
    isLoading: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case newUserFormActions.SAVE_NEW_USER:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                saved: false
            };
        case newUserFormActions.SAVE_NEW_USER_COMPLETED:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                saved: true
            };
        case newUserFormActions.SAVE_NEW_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        default:
            return state;
    }
};