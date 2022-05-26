import React from 'react';
import './Button.css'

export const Button = ({ textButton, sizeFont, borderRadius, padding, evaluateButton}) => {

    return (
        
            <button
                style={{ fontSize: sizeFont, WebkitBorderRadius: borderRadius, padding: padding}}
                className='button'
                onClick={evaluateButton}
                >
                {textButton}
            </button>
        
    )
}
