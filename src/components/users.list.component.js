import React, { Component } from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import Spinner from 'react-spinkit';
import UserListItem from './user.list.item.component';
import MessageComponent from './shared/messages';
import styles from '../styles/components/user.list.scss';
import stylesMessages from '../styles/elements/messages.scss';

const UsersListComponent = ({filteredUsers, openUserDetailsModal, deleteUser, saveUser, isLoading, hasError}) => {
    let spinner = null;
    let message = null;
    if(isLoading) spinner = <Spinner name="pacman" color="#2cbf55"/>;
    console.log(hasError)
    if(hasError) {
        console.log('erre')
        message = <MessageComponent
            text="OOps, something went wrong"
            className={stylesMessages.error}
        />
    }

    return (
        <div>
            <div>
                {message}
            </div>
            <ul className={styles.userList}>
                {
                    filteredUsers.map((user, index) => (
                        <UserListItem
                            key={`item-${index}`}
                            index={index}
                            user={user}
                            openUserDetailsModal={openUserDetailsModal}
                            deleteUser={deleteUser}
                            saveUser={saveUser}
                        />
                    ))

                }
            </ul>
            <div className={styles.spinner}>
                {spinner}
            </div>
        </div>
    )
};

export default SortableContainer(UsersListComponent);

