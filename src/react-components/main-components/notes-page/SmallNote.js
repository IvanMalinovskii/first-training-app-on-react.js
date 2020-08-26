import React, {useEffect, useState} from 'react';
import './notes-page.css';
import Note from './Note';
import NoteCreation from './NoteCreation';

const SmallNote = (props) => {

    const [isTarget, setTarget] = useState(false);

    const onClickHandler = () => {

        const handler = (title, text) => {
            props.setter(<NoteCreation setter={props.setter} title={title} text={text} />)
        }

        props.setter(<Note handler={handler} title={props.title} text={props.text}/>);
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
                <p className='note__text'>{props.title !== ''? props.title : props.text}</p>
            </div>
            <button className='note__button' onClick={deleteListener}>&#10006;</button>
        </div>
    );
};

export default SmallNote;
