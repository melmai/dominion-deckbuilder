import React, { Component } from 'react';

const Nav = () => {
    const Separator = <span> | </span>;
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="/">Deckbuilder</a></li>
                <Separator />
                <li className="nav__item"><a href="/cards">Card Library</a></li>
                <Separator />
                <li className="nav__item"><a href="/decks">Suggested Sets</a></li>
            </ul>
        </nav>
    );
}
    

export default Nav;