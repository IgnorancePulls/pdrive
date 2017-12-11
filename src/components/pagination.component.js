import React from 'react';
import {Button} from '../components/shared/buttons';
import styles from '../styles/components/paginations.scss';
import stylesButtons from '../styles/elements/buttons.scss';
import cx from "classnames";

const PaginationComponent = ({next, prev, nextAllowed, prevAllowed}) => {
    console.log(nextAllowed)
    let nextClassName = cx(stylesButtons.buttonSecondarySmall, {
        [stylesButtons.buttonSecondaryDisabled]: !nextAllowed,
    });
    let prevClassName = cx(stylesButtons.buttonSecondarySmall, {
        [stylesButtons.buttonSecondaryDisabled]: !prevAllowed,
    });

    return(
        <div className={styles.paginationWrapper}>
            <Button
                className={prevClassName}
                onClick={() => {
                    prevAllowed ? prev(): null
                }}
                text="Prev"
            />
            <Button
                className={nextClassName}
                onClick={() => {
                    nextAllowed ? next(): null
                }}
                text="Next"
            />
        </div>
    )
};

export default PaginationComponent;