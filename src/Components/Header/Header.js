import React from 'react'
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import './Header.css';

export const Header = () => {
    return (
        <div className='div-header'>
            <div className='divTitle'>
                <div>
                    <h1 className='title-p'>Shortly</h1>
                </div>
                <div className='div'>
                    <Text textContent='Features' />
                    <Text textContent='Pricing' />
                    <Text textContent='Resorces' />
                </div>
            </div>
            <div className='divButton'>
                <Text textContent='Login' />
                <Button textButton='Sign Up' sizeFont="2vh"/>
            </div>
        </div>
    )
}
