import React, { Component } from 'react';
import styles from '../../styles/elements/forms.scss'

export const InputField = (
    { input,
        label,
        value,
        placeholder,
        type,
        className,
        meta: {
            touched,
            error,
            warning
        }
    }) => {
    return (
        <div className={styles.field}>
            <label
                className={styles.label}
            >{label}</label>
            <input
                {...input}
                className={className}
                placeholder={placeholder}
                value={value}
                type={type}/>

            {touched && ((error &&
            <span
                className={styles.errorMessage}
            >{error}</span>)
            || (warning &&
            <span className={styles.warningMessage}>{warning}</span>))}
        </div>
    )
}