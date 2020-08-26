import React from 'react';
import './notes-page.css';

const Note = ({title, text, handler}) => {

    const dbClickHandler = () => {
        handler(title, text);
    }

    return (
        <div onDoubleClick={dbClickHandler} className='large-note'>
            <h3 className='large-note__title'>{title}</h3>
            <p className='large-note__text'>
                {text} 
            </p>
        </div>
    );
};

export default Note;
