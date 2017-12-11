import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import {InputField} from '../components/shared/input.fields';
import {Button, ButtonCancel} from '../components/shared/buttons';
import MessageComponent from './shared/messages';
import Spinner from 'react-spinkit';
import styles from '../styles/components/new.user.form.scss';
import stylesForms from '../styles/elements/forms.scss';
import stylesMessages from '../styles/elements/messages.scss';
import {ERROR_MESSAGE} from '../constatns/messages';
//form validator
import * as fv from '../helper/form.validator';

let NewUserFormComponent = ({handleSubmit, onSubmit, onClose, isLoading, hasError}) => {
    let spinner = null;
    let message = null;
    if(isLoading) spinner = <Spinner name="pacman" color="#2cbf55"/>;
    if(hasError) {
        message = <MessageComponent
            text={ERROR_MESSAGE}
            className={stylesMessages.error}
        />
    }

    return(
        <div className={styles.overlay}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Create new user</h2>
                    <ButtonCancel
                        className={styles.closeButton}
                        onClick={() => onClose()}/>
                </div>
                <div className={styles.spinner}>
                    {spinner}
                </div>
                <div>
                    {message}
                </div>
                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Field
                            name="name"
                            type="text"
                            component={InputField}
                            label="Username"
                            className={stylesForms.inputText}
                            validate={[fv.required, fv.maxLength20]}
                        />
                        <Field
                            name="phone"
                            type="number"
                            component={InputField}
                            label="Phone"
                            className={stylesForms.inputNumber}
                            validate={fv.isNumber}
                        />
                        <Field
                            name="email"
                            type="email"
                            component={InputField}
                            label="Email"
                            className={stylesForms.inputEmail}
                            validate={[fv.isEmail]}
                        />
                        <Field
                            name="org_id"
                            type="number"
                            component={InputField}
                            label="Organization"
                            className={stylesForms.inputNumber}
                            validate={[fv.isNumber]}
                        />
                        <Field
                            name="owner_id"
                            type="number"
                            component={InputField}
                            label="Owner id"
                            className={stylesForms.inputNumber}
                            validate={[fv.isNumber]}
                        />
                        <Button
                            className={styles.saveButton}
                            onClick={() => null}
                            text="Submit"
                        />
                    </form>
                </div>
                <div className={styles.footer}>
                    <Button
                        className={styles.backButton}
                        onClick={() => onClose()}
                        text="Back"
                    />
                </div>
            </div>
        </div>
    )
};

NewUserFormComponent = reduxForm({
    form: 'newUserForm'
})(NewUserFormComponent)

export default NewUserFormComponent;