import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputField} from '../components/shared/input.fields';
import styles from '../styles/components/toolbar.scss';
import SearchLogo from '../assets/icons/search-logo.svg';

let ToolBarComponent = ({openNewUserForm}) => {
    return (
        <div className={styles.toolbar}>
            <h2 className={styles.toolbarHeading}>People's list</h2>
            <div className={styles.toolsWrapper}>
                <a
                    className={styles.link}
                    href='#'
                    onClick={() => openNewUserForm()}
                >+ Add new user</a>
                <div className={styles.toolbarSearch}>
                    <form>
                        <Field
                            name="userName"
                            type="text"
                            component={InputField}
                            placeholder="Username"
                            className={styles.toolbarSearchField}
                        />
                        <SearchLogo
                            className={styles.toolbarSearchIcon}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
};

ToolBarComponent = reduxForm({
    form: 'searchUser'
})(ToolBarComponent)

export default ToolBarComponent;