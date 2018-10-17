import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

const CardDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6598;
    margin: 1em;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: flex;
    flex-direction: row;
    background-color: #6598;
    margin: 1em;
  }
  .cardbox {
    display: flex;
    direction: row;
  }
  .cardDetails {
  }
  .cardimg {
  }
  .buttonRow {
    flex-direction: flex-end;
  }
`;

class Card extends React.Component {
  render() {
    return (
      <CardDiv>
        <div className="cardbox">
          <div className="cardDetails">
            <div className="headlineText">
              <Link to="/">Headline Text - This is some random text</Link>
            </div>
            <div className="headlineSub">Colombo, Sri Lanka</div>
            <div className="headlineDes">
              Headline Text - This is in sinhala
            </div>
            <div className="textRemain">2 Days remaining</div>
            <div className="buttonRow">
                <button>Download</button>
                <button>View</button>
            </div>
          </div>
          <div className="cardimgwrapper">
            <div className="cardimg">
              <img src="" alt="some title" />
            </div>
          </div>
        </div>
      </CardDiv>
    );
  }
}

export default Card;
