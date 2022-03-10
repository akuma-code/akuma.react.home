import React from 'react';
import classes from './akuButton.module.css'
const AkuButton = ({ children, ...props }) => {

    return (
        <button
            {...props}
            className={classes.akuBtn}
        >{children}</button>
    )
}

export default AkuButton