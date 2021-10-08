import React from "react";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';



function Main({ currentPage }) {

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    }

    return (
        <main>
            <h1>Main</h1>
            {renderPage()}
        </main>
    );

};

export default Main;