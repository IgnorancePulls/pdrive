import {createAction} from '../helper/action.creator';

export const OPEN_USER_DETAILS_MODAL = '[LAYOUT] Open user details modal';
export const CLOSE_USER_DETAILS_MODAL = '[LAYOUT] Close user details modal';
export const OPEN_NEW_USER_FORM = '[LAYOUT] Open new user form';
export const CLOSE_NEW_USER_FORM = '[LAYOUT] Close new user form';
export const DISABLE_USER_LIST_PAGINATION = '[LAYOUT] Disable user List pagination';
export const ENABLE_USER_LIST_PAGINATION_NEXT = '[LAYOUT] Enable user List pagination next';
export const ENABLE_USER_LIST_PAGINATION_PREV = '[LAYOUT] Enable user List pagination previous';
export const DISABLE_USER_LIST_PAGINATION_NEXT = '[LAYOUT] Disable user List pagination next';
export const DISABLE_USER_LIST_PAGINATION_PREV = '[LAYOUT] Disable user List pagination prev';
export const CHANGE_USER_LIST_PAGINATION_START = '[LAYOUT] Change user List pagination start';

export const OpenUserDetailsModal = createAction(OPEN_USER_DETAILS_MODAL, 'userId');
export const CloseUserDetailsModal = createAction(CLOSE_USER_DETAILS_MODAL);

export const OpenNewUserForm = createAction(OPEN_NEW_USER_FORM);
export const CloseNewUserForm = createAction(CLOSE_NEW_USER_FORM);

export const DisableUserListPagination =  createAction(DISABLE_USER_LIST_PAGINATION);
export const EnableUserListPaginationNext =  createAction(ENABLE_USER_LIST_PAGINATION_NEXT);
export const EnableUserListPaginationPrev =  createAction(ENABLE_USER_LIST_PAGINATION_PREV);
export const DisableUserListPaginationNext =  createAction(DISABLE_USER_LIST_PAGINATION_NEXT);
export const DisableUserListPaginationPrev =  createAction(DISABLE_USER_LIST_PAGINATION_PREV);
export const ChangeUserListPaginationStart =  createAction(CHANGE_USER_LIST_PAGINATION_START, 'start');