import React from "react";
import Nav from './Nav';


function Header({ pages, currentPage, handlePageChange }) {

    return (
        <header>
            <h1>Peter Weigman</h1>
            <img alt="A screenshot of code that I have written."></img>
            <Nav pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );

};

export default Header;