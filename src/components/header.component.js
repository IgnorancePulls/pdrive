import React, { Component } from 'react';
import Logo from '../assets/icons/pipedrive-logo.svg';

import styles from '../styles/components/header.scss'

const HeaderComponent = props => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <Logo/>
            </div>
        </div>
    )
};

export default HeaderComponent;