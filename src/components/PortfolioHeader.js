import React from 'react';


function PortfolioHeader() {

    return (
        <div>
            <header>
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper grey darken-3">
                            <a href="#" class="brand-logo">My Portfolio</a>
                            <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul class="right hide-on-med-and-down">
                                <li><a href="#myWork">My Work</a></li>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#contact">Contact Me</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <ul class="sidenav" id="mobile-nav">
                    <li><a href="#myWork">My Work</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </header>
        </div >
    )
};

export default PortfolioHeader;