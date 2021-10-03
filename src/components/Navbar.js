import React from "react";


function Navbar() {

    return (
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper grey darken-3">
                    <a href="/" class="brand-logo">My Portfolio</a>
                    <a href="/" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
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