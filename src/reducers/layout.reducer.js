import * as layoutActions from '../actions/layout.actions';

const initialState = {
    userDetailsModal: {
        isOpen: false,
        userId: null
    },
    newUserForm: {
        isOpen: false
    },
    userListPagination: {
        start: 0,
        limit: 5,
        nextAllowed: false,
        prevAllowed: false,
    }
};

export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case layoutActions.OPEN_USER_DETAILS_MODAL:
            return {
                ...state,
                userDetailsModal: {
                    isOpen: true,
                    userId: action.userId
                }
            };
        case layoutActions.CLOSE_USER_DETAILS_MODAL:
            return {
                ...state,
                userDetailsModal: {
                    isOpen: false,
                }
            };
        case layoutActions.OPEN_NEW_USER_FORM:
            return {
                ...state,
                newUserForm: {
                    isOpen: true,
                }
            };
        case layoutActions.CLOSE_NEW_USER_FORM:
            return {
                ...state,
                newUserForm: {
                    isOpen: false,
                }
            };
        case layoutActions.DISABLE_USER_LIST_PAGINATION:
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    nextAllowed: false,
                    prevAllowed: false,
                })
            };
        case layoutActions.ENABLE_USER_LIST_PAGINATION_NEXT:
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    nextAllowed: true,
                })
            };
        case layoutActions.ENABLE_USER_LIST_PAGINATION_PREV:
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    prevAllowed: true,
                })
            };
        case layoutActions.DISABLE_USER_LIST_PAGINATION_NEXT:
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    nextAllowed: false,
                })
            };
        case layoutActions.DISABLE_USER_LIST_PAGINATION_PREV:
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    prevAllowed: false,
                })
            };
        case layoutActions.CHANGE_USER_LIST_PAGINATION_START: {
            return {
                ...state,
                userListPagination: Object.assign({}, state.userListPagination, {
                    start: action.start
                })
            };
        }
        default:
            return state;
    }
};