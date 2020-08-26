import React, {useReducer, useEffect} from 'react';
import NotesContext from './NotesContext.js';
import notesReducer from './notesReducer.js';
import axios from 'axios';

const url = 'https://notes-react-training.firebaseio.com/';

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

    const getNotes = async () => {
        let notes = await fetch(url + 'notes.json')
        .then(resp => resp.json());

        if (!notes) notes = [];
        
        notes = Object.keys(notes).map((key) => ({key, ...notes[key]}));

        console.log(notes);

        dispatcher({type: 'GET_NOTES', payload: {notes}});
    };

    const removeNote = async (key) => {
        await fetch(url + 'notes/' + key + '.json', {
            method: 'DELETE'
        });
        dispatcher({
            type: 'DELETE_NOTE',
            payload: {
                key
            }
        });
    };

    const addNote = async (title, text) => {
        const noteName = await fetch(url + 'notes.json',{
            method: 'POST', 
            body: JSON.stringify({title, text})
        })
        .then(resp => {
            return resp.json();
        });

        dispatcher({
            type: 'ADD_NOTE',
            payload: {
                key: noteName.name,
                title,
                text
            }
        });
    }

    return (
        <NotesContext.Provider value={{notes: state.notes, getNotes, removeNote, addNote}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesState;
