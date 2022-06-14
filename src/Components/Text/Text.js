import React from 'react';
import { App } from '../../scenes/App/App';
import './Text.css';

export const Text = ({textContent}) => {

  return (
    <>
        <a className='text' href={<App />}>{textContent}</a>
    </>
  )
}
