import React from 'react';
import styles from '../styles/components/user.avatar.scss';

const UserAvatarComponent = ({user}) => {
    const userFirstChar = user.first_char;
    const userSecondChar = user.last_name ? user.last_name.charAt(0) : '';
    const imgSrc = user.picture_id ? user.picture_id.pictures['128'] : null;

    if (imgSrc) {
        return (
            <div className={styles.userAvatarWrapper}>
                <img className={styles.userAvatarImage} src={imgSrc} alt=""/>
            </div>
        )
    }

    return (
        <div className={styles.userAvatarWrapper}>
            <p className={styles.userAvatarInitials}>
                {userFirstChar} {userSecondChar}
            </p>
        </div>
    )
};

export default UserAvatarComponent;