import React from "react";

import styled from "styled-components";

const FooterDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 6 / 7;
    grid-column: 1 / -1;
    height: auto;
    background-color: black;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 6 / 7;
    grid-column: 1 / -1;
    height: auto;
    background-color: black;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterDiv>
        <span style={{ color: "white" }}>footer</span>
      </FooterDiv>
    );
  }
}

export default Footer;
