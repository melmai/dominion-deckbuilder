import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const Separator = () => <span> | </span>
    return (    
        <nav className="nav">
            <NavLink to="/" exact activeClassName="nav__item-active">DeckBuilder</NavLink>
            <Separator />
            <NavLink to="/cards" activeClassName="nav__item-active">Card Library</NavLink>
            <Separator />
            <NavLink to="/decks" activeClassName="nav__item-active">Suggested Decks</NavLink>
            <Separator />
            <NavLink to="/about" activeClassName="nav__item-active">About</NavLink>
            <Separator />
            <NavLink to="/contact" activeClassName="nav__item-active">Contact</NavLink>
        </nav>
    );

};

export default Nav;