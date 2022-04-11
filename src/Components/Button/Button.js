import React from 'react';
import './Button.css'

export const Button = ({ textButton, sizeFont }) => {

    return (
        <div>
            <button
                style={{ fontSize: sizeFont }}
                className='button'>
                {textButton}
            </button>
        </div>
    )
}
