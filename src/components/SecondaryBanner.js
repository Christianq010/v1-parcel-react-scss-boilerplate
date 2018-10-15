import React from "react";
import styled from "styled-components";

import BannerContent from "./BannerContent";

const SecondaryBannerDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6578;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6978;
  }
`;

class SecondaryBanner extends React.Component {
  render() {
    const content = (
        <div>
            <h3>random content</h3>
            <button>click me!</button>
        </div>
    );
    return (
      <SecondaryBannerDiv>
        <span style={{ color: "black" }}>Secondary Banner</span>
        <BannerContent content={content} />
      </SecondaryBannerDiv>
    );
  }
}

export default SecondaryBanner;
