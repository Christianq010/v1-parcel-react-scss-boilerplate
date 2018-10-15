import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import MainBanner from "../components/MainBanner";
import CardWrapper from "../components/Cards/CardWrapper";

const HomepageDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: auto;
    display: grid;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    height: auto;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 25%;
    grid-auto-flow: dense;
  }
`;

class Homepage extends React.Component {
  state = {};
  render() {
    return (
      <HomepageDiv>
        <Navbar />
        <MainBanner />
        <CardWrapper />
      </HomepageDiv>
    );
  }
}

export default Homepage;
