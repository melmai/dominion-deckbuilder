import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <NavLink to="/" exact activeClassName="nav__item-active">DeckBuilder</NavLink>
        <NavLink to="/cards" activeClassName="nav__item-active">Card Library</NavLink>
        <NavLink to="/decks" activeClassName="nav__item-active">Suggested Decks</NavLink>
    </nav>
);

export default Nav;