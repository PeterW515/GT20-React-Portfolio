import React from "react";
import Nav from './Nav';
import './Header.css'
import backgroundImg from '../../assets/code_sample.png';


function Header({ pages, currentPage, handlePageChange }) {

    return (
        <header className="center-align" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <h1>Peter Weigman's Portfolio</h1>
            <Nav pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );

};

export default Header;