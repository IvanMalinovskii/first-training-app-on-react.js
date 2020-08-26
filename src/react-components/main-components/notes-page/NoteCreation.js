import React, {useState, useContext} from 'react';
import NotesContext from '../notesState/NotesContext';
import EmptyNote from './EmptyNote';

const NoteCreation = ({title, text, setter}) => {
    const [noteTitle, setTitle] = useState(title || '');
    const [noteText, setText] = useState(text || '');
    const {addNote} = useContext(NotesContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (noteText) {
            addNote(5, noteTitle, noteText);
            setter(<div>setter</div>);
        }
        else 
            console.log('empty text');
    };

    return (
        <form className='note-creation' onSubmit={onSubmitHandler}>
            <input placeholder='title...' name='title' className='note-creation__input' type='text' value={noteTitle} onChange={event => setTitle(event.target.value)} />
            <textarea placeholder='text...' name='note' className='note-creation__area' value={noteText} onChange={event => setText(event.target.value)}></textarea>
            <button className='note-creation__button'>create</button>
        </form>
    );
};

export default NoteCreation;
