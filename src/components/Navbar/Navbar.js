import React from "react";

import styled from "styled-components";

const NavbarDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    height: auto;
    background-color: black;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    height: auto;
    background-color: black;
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <NavbarDiv>
        <span style={{ color: "white" }}>Logo</span>
      </NavbarDiv>
    );
  }
}

export default Navbar;
