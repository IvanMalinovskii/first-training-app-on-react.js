import React, {useEffect, useState} from 'react';
import './notes-page.css';

const SmallNote = (props) => {

    const [isTarget, setTarget] = useState(false);

    const onClickHandler = () => {
        props.setter(<div>{props.text}</div>);
        setTarget(true);
    }

    const deleteListener = (e) => {
        e.stopPropagation();
        props.removeNote(props.id);
    }

    useEffect(() => {
        return () => {
            if (isTarget) props.setter(null);
        }
    }, [isTarget]);

    return (
        <div onClick={onClickHandler} className={`note ${props.classList.join(' ')}`}>
            <div className="note__text-container">
                <p className='note__text'>{props.text}</p>
            </div>
            <button className='note__button' onClick={deleteListener}>&#10006;</button>
        </div>
    );
};

export default SmallNote;
