import React, {useState} from 'react';

const NoteCreation = () => {
    const [value, setValue] = useState('');

    return (
        <form className='note-creation' onSubmit={(e) => e.preventDefault()}>
            <input placeholder='title...' name='title' className='note-creation__input' type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <textarea placeholder='text...' name='note' className='note-creation__area'></textarea>
            <button className='note-creation__button'>create</button>
        </form>
    );
};

export default NoteCreation;
