import { createSelector } from 'reselect';

const getSelectedUserId = state => state.layoutReducer.userDetailsModal.userId;
const getUsers = state => state.usersReducer.users;

export const getSelectedUserDetailsById = createSelector(
    [getUsers, getSelectedUserId],
    (users, selectedUserId) => users.find(user => user.id === selectedUserId)

)