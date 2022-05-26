import React from 'react';
import './CardStatistics.css';

export const CardStatistics = ({ icon, title, description, classCss }) => {
    return (
        <div className={classCss}>
            <div className='card'>
                <div className='circulo'>
                    {icon}
                </div>
                <div className='div-card'>
                    <h2 className='title-card' >{title}</h2>
                    <p className='text-card'>{description}</p>
                </div>
            </div>
        </div>

    )
}
