import React, { Component } from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import UserListItem from './user.list.item.component';
import styles from '../styles/components/user.list.scss';

const UsersListComponent = props => {
    return (
        <ul className={styles.userList}>
            {
                props.filteredUsers.map((user, index) => (
                    <UserListItem
                        key={`item-${index}`}
                        index={index}
                        user={user}
                        openUserDetailsModal={props.openUserDetailsModal}
                        deleteUser={props.deleteUser}
                        saveUser={props.saveUser}
                    />
                ))
            }
        </ul>
    )
};

export default SortableContainer(UsersListComponent);

