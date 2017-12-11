import * as newUserFormActions from '../actions/new.user.actions';

const initialState = {
    name: null,
    owner_id: null,
    org_id: null,
    email: null,
    phone: null

};

export const newUserFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case newUserFormActions.CHANGE_NEW_USER_FORM_INPUT_VALUE:
            return {
                ...state,
                [action.field]: action.value
            };
        default:
            return state;
    }
};