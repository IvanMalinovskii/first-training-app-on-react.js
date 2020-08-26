import React, { useState, useEffect, useContext } from 'react';
import './notes-page.css';
import NotesPanel from './NotesPanel.js';
import NotesArea from './NotesArea.js';
import EmptyNote from './EmptyNote.js';
import NotesState from '../notesState/NotesState';
import NoteCreation from './NoteCreation';
import Note from './Note';
import NotesContext from '../notesState/NotesContext';

//const DB_URL = 'https://notes-react-training.firebaseio.com/';

const NotesPage = () => {
    const [component, setComponent] = useState(<EmptyNote/>)
    const {getNotes, notes} = useContext(NotesContext);

    useEffect(() => {
      getNotes();
    },[]);

    return (
        <div className='notes-page'>
          <NotesPanel setter={setComponent} />
          <NotesArea component={component} />
        </div>
    )
};

export default NotesPage;
