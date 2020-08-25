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
    }

    return (
        <NotesContext.Provider value={{notes: state.notes, removeNote}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesState;
