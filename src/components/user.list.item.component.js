import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import UserAvatarComponent from './user.avatar.component';
import {Button, ButtonCancel, ButtonConditional} from './shared/buttons';
import {ORDER_FIELD_KEY} from '../constatns/custom.fields';
import styles from '../styles/components/user.list.item.scss';
import stylesButtons from '../styles/elements/buttons.scss';
import CompanyIcon from '../assets/icons/company-icon.svg';

const UserListItem = ({user, openUserDetailsModal, deleteUser, saveUser}) => {
    const userName = user.name;
    const userId = user.id;
    const organization = user.org_id ? user.org_id.name : 'Unknown';
    const notSaved = user.notSaved;
    const userIndex = user[ORDER_FIELD_KEY];

    return (
        <li className={styles.userListItem}>
            <div>
                <p className={styles.userListItemUserName}>{userName}</p>
                <div>
                    <CompanyIcon className={styles.userListItemOrganizationIcon}/>
                    <p className={styles.userListItemOrganization}>
                        {organization}
                    </p>
                </div>
                <Button
                    className={stylesButtons.buttonPrimarySmall}
                    onClick={() => openUserDetailsModal(userId)}
                    text="View Details"
                />
                <ButtonConditional
                    enabled={notSaved}
                    className={styles.saveUserButton}
                    onClick={() => saveUser(userId, {[ORDER_FIELD_KEY]: userIndex})}
                    text="Save user"
                />
            </div>
            <div className={styles.userMiniature}>
                <UserAvatarComponent
                    user={user}
                />
            </div>
            <ButtonCancel
                className={styles.deleteUserButton}
                onClick={() => deleteUser(userId)}/>
        </li>
    )
};

export default SortableElement(UserListItem);