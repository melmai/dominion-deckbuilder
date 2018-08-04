import React, { Component } from 'react';

const Nav = () => {
    const Separator = <span> | </span>;
    return (
        <nav>
            <ul>
                <li><a href="/">Deckbuilder</a></li>
                <Separator />
                <li><a href="/cards">Card Library</a></li>
                <Separator />
                <li><a href="/decks">Suggested Sets</a></li>
            </ul>
        </nav>
    );
}
    

export default Nav;