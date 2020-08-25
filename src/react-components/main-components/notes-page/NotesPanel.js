import React, {useContext} from 'react';
import NoteCreation from './NoteCreation.js';
import './notes-page.css';
import SmallNote from './SmallNote.js';
import NotesContext from '../notesState/NotesContext';

const NotesPanel = ({setter}) => {
    const {notes, removeNote} = useContext(NotesContext);

    const createButtonHandler = () => {
        setter(<NoteCreation />);
    };

    return(
        <div className="panel">
            <div className="panel__header">
                <h2 className='panel__title'>notes list</h2>
                <button className='panel__button' onClick={createButtonHandler}>+</button>
            </div>
            <div className='notes__smalls'>
                {notes.map(note => <SmallNote removeNote={removeNote} id={note.key} classList={['notes__note']} {...note} setter={setter}/>)}
            </div>
        </div>
    );
};

export default NotesPanel;
