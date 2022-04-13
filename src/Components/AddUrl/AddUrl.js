import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './addurl.css';

export const AddUrl = () => {
    const [inputvalue, setinputvalue] = useState('');
    const [show, setshow] = useState(false);

    const getInputValue = (e) => {
        setinputvalue(e.target.value);
    }

    const evaluateButton = () => {
        if (inputvalue.trim().length <= 0) {
            setshow(true);
        }else{
            setshow(false);
        }
    }

    return (
        <>
            {
                !show
                    ?
                    (
                        <input
                            className='url-input'
                            placeholder='Shorten a link here...'
                            value={inputvalue}
                            onChange={getInputValue}
                        />
                    )
                    :
                    (
                        <div className='error-div{'>
                            <input
                                className='url-input-error'
                                placeholder='Shorten a link here...'
                                value={inputvalue}
                                onChange={getInputValue}
                            />
                            <p className='text-error'>Please add a link</p>
                        </div>
                    )
            }
            {/* <button onClick={evaluateButton}> Hola </button> */}
            <Button
                textButton='Shorten it!!'
                sizeFont="2vh"
                borderRadius='1vh'
                className='url-button'
                padding='2vh 5vh'
                evaluateButton={evaluateButton}
            />
        </>
    )
}
