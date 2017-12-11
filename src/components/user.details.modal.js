import React, {Component} from 'react';
import UserAvatarComponent from './user.avatar.component';
import {ButtonCancel, Button} from './shared/buttons';
import {
    GROUPS_FIELD_KEY,
    ADDRESS_FIELD_KEY,
    ASSISTANT_FIELD_KEY
} from '../constatns/custom.fields';
import styles from '../styles/components/user.details.modal.scss';

const UserDetailsModalComponent = ({userDetails, closeUserDetailsModal}) => {
    const userName = userDetails.name;
    const imgSrc = userDetails.picture_id ? userDetails.picture_id.pictures['128'] : '';
    const userPhone = userDetails.phone ? userDetails.phone[0].value : 'No phone';
    const userEmail = userDetails.email[0].value ? userDetails.email[0].value : 'No email';
    const organization = userDetails.org_id ? userDetails.org_id.name : 'No organization';
    const address = userDetails[ADDRESS_FIELD_KEY] ? userDetails[ADDRESS_FIELD_KEY] : 'No address';
    const groups = userDetails[GROUPS_FIELD_KEY] ? userDetails[GROUPS_FIELD_KEY] : 'No Groups';
    const assistant = userDetails[ASSISTANT_FIELD_KEY] ? userDetails[ASSISTANT_FIELD_KEY].name : 'No Assistant';

    return (
        <div
            className={styles.overlay}
            onClick={() => closeUserDetailsModal()}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Person information</h2>
                    <ButtonCancel
                        className={styles.modalCloseButton}
                        onClick={() => closeUserDetailsModal()}/>
                </div>
                <div className={styles.modalDetailsWrapper}>
                    <div className={styles.primaryDetails}>
                        <div className={styles.modalAvatarWrapper}>
                            <UserAvatarComponent
                            user={userDetails}
                            />
                        </div>
                        <p className={styles.userName}>{userName}</p>
                        <a className={styles.userPhone} href={`tel:${userPhone}`}>{userPhone}</a>
                    </div>
                    <div className={styles.secondaryDetailsWrapper}>
                        <table className={styles.secondaryDetails}>
                            <tbody>
                            <tr>
                                <th className={styles.secondaryDetailsHeading}>Email</th>
                                <td className={styles.secondaryDetailsData}>{userEmail}</td>
                            </tr>
                            <tr>
                                <th className={styles.secondaryDetailsHeading}>Organization</th>
                                <td className={styles.secondaryDetailsData}>{organization}</td>
                            </tr>
                            <tr>
                                <th className={styles.secondaryDetailsHeading}>Assistant</th>
                                <td className={styles.secondaryDetailsData}>{assistant}</td>
                            </tr>
                            <tr>
                                <th className={styles.secondaryDetailsHeading}>Groups</th>
                                <td className={styles.secondaryDetailsData}>{groups}</td>
                            </tr>
                            <tr>
                                <th className={styles.secondaryDetailsHeading}>Location</th>
                                <td className={styles.secondaryDetailsData}>{address}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <Button
                        className={styles.modalBackButton}
                        onClick={() => closeUserDetailsModal()}
                        text="Back"
                    />
                </div>
            </div>
        </div>
    )
};

export default UserDetailsModalComponent;