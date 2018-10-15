import React from "react";

import styled from 'styled-components'

const NavbarDiv = styled.div`
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .navbar {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        height: auto;
        background-color: black;
    }
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
    .navbar {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        height: auto;
        background-color: black;
    }
}
`

const Navbar = () => {
    return (
        <NavbarDiv>
            <div className="navbar">
                <span style={{ color: 'white' }}>Navbar</span>
            </div>
        </NavbarDiv>
    );
};

export default Navbar;

