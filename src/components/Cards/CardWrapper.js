import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardWrapperDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6518;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 3 / 4;
    grid-column: 2 / 14;
    height: auto;
    background-color: #6518;
  }
`;

const Cards = styled.div`
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
`;

class CardWrapper extends React.Component {
  render() {
    return (
      <CardWrapperDiv>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CardWrapperDiv>
    );
  }
}

export default CardWrapper;
