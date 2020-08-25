import React, {useContext} from 'react';
// import notepageContext from '../notepageContext/notepageContext.js';
import NoteCreation from './NoteCreation.js';

const NotesArea = ({component}) => {
    // const {fragment} = useContext(notepageContext);
    return (
        <div className='notes__area'>
            {/* <NoteCreation /> */}
            {component}
        </div>
    );
};

export default NotesArea;
