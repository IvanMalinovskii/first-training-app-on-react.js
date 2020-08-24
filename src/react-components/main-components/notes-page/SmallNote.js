import React from 'react';
import './notes-page.css';

const SmallNote = (props) => {
    return (
        <div className={`note ${props.classList.join(' ')}`}>
            <div className="note__text-container">
                <p className='note__text'>{props.text}</p>
            </div>
            <button className='note__button'>&#10006;</button>
        </div>
    );
};

export default SmallNote;
