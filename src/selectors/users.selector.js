import { createSelector } from 'reselect';

const getUsers = state => state.usersReducer.users;
const getUsersNameFilter = state => state.form.searchUser.values;

export const getFilteredUsersByName = createSelector(
    [getUsers, getUsersNameFilter],
    (users, userNameFilter) => {
        if(userNameFilter) {
            return users.filter((user) => user.name.toLowerCase().includes(userNameFilter.userName))
        }
        return users;
    }
)