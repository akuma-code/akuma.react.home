import React from 'react';
import classes from './AkuInput.module.css'
const AkuInput = (props) => {
    const { ph } = props

    return (
        <input

            className={classes.akuInput}
            placeholder={ph}
            {...props} />

    )
}

export default AkuInput