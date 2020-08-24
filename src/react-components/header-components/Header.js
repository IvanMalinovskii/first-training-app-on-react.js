import React from 'react';
import Navbar from './Navbar.js';
import './header.css';

let Header = ({links = []}) => {
    return (
        <header className="header">
            <p className="header__logo">NotesPad</p>
            <Navbar links={links} />
        </header>
    );
};

export default Header;