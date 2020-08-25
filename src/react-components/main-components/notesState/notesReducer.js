import React from 'react';



export default function notesReducer(state, action) {
    switch(action.type) {
        case 'ADD_NOTE': return {notes: [...state.notes, action.payload]};
        case 'DELETE_NOTE': return {notes: state.notes.filter(note => note.key != action.payload.key)};
        default: return state;
    }
};