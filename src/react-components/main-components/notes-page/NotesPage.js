import React, { useState } from 'react';
import SmallNote from './SmallNote.js';
import './notes-page.css';
import NotesPanel from './NotesPanel.js';
import NotesArea from './NotesArea.js';
import EmptyNote from './EmptyNote.js';
// import NotepageState from '../notepageContext/NotepageState.js';


const DB_URL = 'https://notes-react-training.firebaseio.com/';

const NotesPage = () => {
    const [component, setComponent] = useState(<EmptyNote/>)


    return (
      <div className='notes-page'>
          <NotesPanel />
          <NotesArea component={component} />
      </div>
    )
};

export default NotesPage;
