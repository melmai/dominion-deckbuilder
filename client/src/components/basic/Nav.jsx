import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (    
    <nav className="nav">
        <NavLink to="/" exact className="nav__item" activeClassName="nav__item-active">DeckBuilder</NavLink>
        <NavLink to="/cards" className="nav__item" activeClassName="nav__item-active">Card Library</NavLink>
        <NavLink to="/decks" className="nav__item" activeClassName="nav__item-active">Suggested Decks</NavLink>
        <NavLink to="/about" className="nav__item" activeClassName="nav__item-active">About</NavLink>
        <NavLink to="/contact" className="nav__item" activeClassName="nav__item-active">Contact</NavLink>
    </nav>
);


export default Nav;