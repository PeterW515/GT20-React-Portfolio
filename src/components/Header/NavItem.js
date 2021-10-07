import React from "react";

function NavItem({ page, currentPage, handlePageChange }) {
    return (
        <li>
            <a href={`#${page.toLowerCase()}`} onClick={() => handlePageChange(page)}>
                {page}
            </a>
        </li>
    )
}

export default NavItem;