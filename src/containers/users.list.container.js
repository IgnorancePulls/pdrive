import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserDetailsModal from './user.details.modal.container';
import UsersListComponent from '../components/users.list.component';
import UserListPagination from './pagination.container';
import {arrayMove} from 'react-sortable-hoc';
import * as usersListActions from '../actions/users.list.actions';
import * as layoutActions from '../actions/layout.actions';
import {generateSortableIndex} from '../helper/indexer';
import {getFilteredUsersByName} from '../selectors/users.selector';

const mapStateToProps = (state) => {
    return {
        filteredUsers: getFilteredUsersByName(state),
        users: state.usersReducer.users,
        paginationStart: state.layoutReducer.userListPagination.start,
        paginationLimit: state.layoutReducer.userListPagination.limit,
        isLoading: state.usersReducer.loading,
        hasError: state.usersReducer.hasError,
        userSaved: state.userReducer.saved
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (start, limit) => dispatch(usersListActions.LoadUsers(start, limit)),
        changeUserOrder: (users) => dispatch(usersListActions.ChangeUserOrder(users)),
        setUserIndex: (userIndex, index) => dispatch(usersListActions.SetUserIndex(userIndex, index)),
        saveUser: (userId, newIndex) => dispatch(usersListActions.SaveUser(userId, newIndex)),
        openUserDetailsModal: (userId) => dispatch(layoutActions.OpenUserDetailsModal(userId)),
        closeUserDetailsModal: () => dispatch(layoutActions.CloseUserDetailsModal()),
        deleteUser: (userId) => dispatch(usersListActions.RemoveUser(userId)),
    };
};


class UsersList extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.paginationStart, this.props.paginationLimit);
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.paginationStart !== nextProps.paginationStart) {
            this.props.getUsers(nextProps.paginationStart, this.props.paginationLimit);
        }

        if(nextProps.userSaved !== this.props.userSaved) {
            this.props.getUsers(this.props.paginationStart, this.props.paginationLimit);
        }
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        if(oldIndex === newIndex) return;
        const reorderedUsersList = arrayMove(this.props.users, oldIndex, newIndex);
        const uniqueIndex = generateSortableIndex(reorderedUsersList, newIndex);
        this.props.changeUserOrder(reorderedUsersList);
        this.props.setUserIndex(newIndex, uniqueIndex);
    };

    render() {
        return(
        <div>
            <UsersListComponent
                filteredUsers={this.props.filteredUsers}
                onSortEnd={this.onSortEnd}
                openUserDetailsModal={this.props.openUserDetailsModal}
                saveUser={this.props.saveUser}
                deleteUser={this.props.deleteUser}
                isLoading={this.props.isLoading}
                hasError={this.props.hasError}
            />
            <UserDetailsModal/>
            <UserListPagination/>
        </div>
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
