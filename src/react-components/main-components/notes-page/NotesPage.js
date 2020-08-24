import React from 'react';
import SmallNote from './SmallNote.js';
import './notes-page.css';
import NotesPanel from './NotesPanel.js';
import NotesArea from './NotesArea.js';

const DB_URL = 'https://notes-react-training.firebaseio.com/';

const NotesPage = () => {
    return (
        <div className='notes'>
            <NotesPanel />
            <NotesArea />
        </div>
    );
};

export default NotesPage;
