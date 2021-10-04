import React from "react";


function Navbar() {

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <a href="/" className="brand-logo">My Portfolio</a>
                    <a href="/" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#myWork">My Work</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );

};

export default Navbar;