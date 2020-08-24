import React, {useState} from 'react';

const NoteCreation = () => {
    const [value, setValue] = useState('');

    return (
        <form className='note-creation'>
            <input className='note-creation__input' type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <textarea className='note-creation__area'></textarea>
        </form>
    );
};

export default NoteCreation;
