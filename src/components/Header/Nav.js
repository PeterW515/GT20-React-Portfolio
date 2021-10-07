import React from "react";

import NavItem from './NavItem'

function Nav({ pages, currentPage, handlePageChange }) {
    return (
        <ul>
            {pages.map(page => (
                <NavItem
                    key={page}
                    page={page}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            ))}
        </ul>
    )
}

export default Nav;