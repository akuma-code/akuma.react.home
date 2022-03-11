import React from 'react'
import cl from './AkuModal.module.css'

const AkuModal = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.ak_modal]
    if (visible)
    {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div className={cl.ak_modal_content}
                onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}


export default AkuModal