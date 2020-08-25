import React from 'react';
import EmptyNote from './EmptyNote';

const NotesArea = ({component}) => {
    const renderComponent = component ? component : <EmptyNote />;
    return (
        <div className='notes__area'>
            {renderComponent}
        </div>
    );
};

export default NotesArea;
