import React from "react";
import styled from "styled-components";

import Search from "./Search";

const MainBannerDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6578;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6578;
  }
`;

class MainBanner extends React.Component {
  render() {
    return (
      <MainBannerDiv>
        <span style={{ color: "black" }}>Main Banner</span>
        <Search />
      </MainBannerDiv>
    );
  }
}

export default MainBanner;
