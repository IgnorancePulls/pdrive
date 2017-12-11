import React from 'react';

import Cancel from '../../assets/icons/cancel-icon.svg';
import styles from '../../styles/elements/buttons.scss'

export const ButtonCancel = ({ className, onClick }) => {
    return (
        <button
            className={className}
            onClick={() => onClick()}>
            <Cancel className={styles.buttonCancelIcon}/>
        </button>
    )
};

export const Button =({className, onClick, text}) => {
    return (
        <button
            className={className}
            onClick={() => onClick()}>
            {text}
        </button>
    )
};

export const ButtonConditional = ({enabled, className, onClick, text}) => {
    if(enabled) {
        return (
            <button
                className={className}
                onClick={() => onClick()}>
                {text}
            </button>
        )}
    return null;

}