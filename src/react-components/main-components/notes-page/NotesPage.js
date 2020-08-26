import React, { useState } from 'react';
import './notes-page.css';
import NotesPanel from './NotesPanel.js';
import NotesArea from './NotesArea.js';
import EmptyNote from './EmptyNote.js';
import NotesState from '../notesState/NotesState';
import NoteCreation from './NoteCreation';
import Note from './Note';

//const DB_URL = 'https://notes-react-training.firebaseio.com/';

const NotesPage = () => {
    const [component, setComponent] = useState(<EmptyNote/>)

    return (
      <NotesState>
          <div className='notes-page'>
          <NotesPanel setter={setComponent} />
          <NotesArea component={component} />
        </div>
      </NotesState>
    )
};

export default NotesPage;
