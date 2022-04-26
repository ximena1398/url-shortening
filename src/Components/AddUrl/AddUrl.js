import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './addurl.css';
import { useDispatch } from 'react-redux';
import { LinkActions } from '../../services/Area/LinkSlice';

export const AddUrl = () => {
    const [inputvalue, setinputvalue] = useState('');
    const [show, setshow] = useState(false);
    // const [url, seturl] = useState(['http://localhost:3001/','http://localhost:3002/','http://localhost:3003/']);
    const dispatch=useDispatch()

   
    

    const getInputValue = (e) => {
        setinputvalue(e.target.value);
    }

    const evaluateButton = () => {
        if (inputvalue.trim().length <= 0) {
            setshow(true);
        }else{
            setshow(false);
            // seturl(url => [inputvalue, ...url]);
            setinputvalue('');
            

            // 1) ejecuta el createShortLink de LinkSlice
            const data={
                "url":inputvalue
            }
            dispatch(LinkActions.createShortLink(data))
            
        }
    }

    return (
        <div className='div-url-add'>
            {
                !show
                    ?
                    (
                        <div>
                            <input
                            className='url-input'
                            placeholder='Shorten a link here...'
                            value={inputvalue}
                            onChange={getInputValue}
                        />
                        </div>
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
        </div>
    )
}
