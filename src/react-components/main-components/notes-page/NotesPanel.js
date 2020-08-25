import React, {useContext} from 'react';
import NotesPage from './NotesPage';
import './notes-page.css';
import SmallNote from './SmallNote.js';
// import notepageContext from '../notepageContext/notepageContext.js';

const NotesPanel = () => {
    // const {clear, create} = useContext(notepageContext);


    return(
        <div className="panel">
            <div className="panel__header">
                <h2 className='panel__title'>notes list</h2>
                <button className='panel__button'>+</button>
            </div>
            <div className='notes__smalls'>
                <SmallNote classList={['notes__note']} text="small 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 textsmall 1 text" />
                <SmallNote classList={['notes__note']} text="small 2 text" />
                <SmallNote classList={['notes__note']} text="small 3 text" />
            </div>
        </div>
    );
};

export default NotesPanel;
