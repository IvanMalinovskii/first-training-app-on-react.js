import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

let Navbar = ({links = []}) => {
    return (
        <ul className="navbar">
            {links.map(link => 
                <li key={link.id} className="navbar__item">
                    <NavLink exact={link.to === ''} activeClassName="navbar__link_active" className="navbar__link" to={'/' + link.to}>
                        {link.text}
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

export default Navbar;
