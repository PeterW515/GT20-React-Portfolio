import React from "react";
import NavItem from './NavItem'

function Nav({ pages, currentPage, handlePageChange }) {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    {pages.map(page => (
                        <NavItem
                            key={page}
                            page={page}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;