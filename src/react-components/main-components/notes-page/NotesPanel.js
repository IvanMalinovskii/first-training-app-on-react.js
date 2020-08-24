import React from 'react';
import NotesPage from './NotesPage';
import './notes-page.css';
import SmallNote from './SmallNote.js';

const NotesPanel = () => {
    return(
        <div className="notes__panel">
            <h2 className='notes__list-title'>notes list</h2>
            <div className='notes__smalls'>
                <SmallNote classList={['notes__note']} text="small 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 text" />
                <SmallNote classList={['notes__note']} text="small 2 text" />
                <SmallNote classList={['notes__note']} text="small 3 text" />
            </div>
        </div>
    );
};

export default NotesPanel;
