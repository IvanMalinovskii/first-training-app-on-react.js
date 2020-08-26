import React, {useReducer} from 'react';
import NotesContext from './NotesContext.js';
import notesReducer from './notesReducer.js';

const NotesState = ({children}) => {
    const [state, dispatcher] = useReducer(notesReducer, {
        notes: [
            {
                title: 'title',
                text: 'some text',
                key: 1
            }
        ]
    });

    const removeNote = (key) => {
        dispatcher({
            type: 'DELETE_NOTE',
            payload: {
                key
            }
        });
    };

    const addNote = (key, title, text) => {
        dispatcher({
            type: 'ADD_NOTE',
            payload: {
                key,
                title,
                text
            }
        });
    }

    return (
        <NotesContext.Provider value={{notes: state.notes, removeNote, addNote}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesState;
