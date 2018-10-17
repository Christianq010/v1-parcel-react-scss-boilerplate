import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

const BlogDiv = styled.div`
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
  .blogbox {
    display: flex;
    direction: row;
  }
  .blogDetails {
  }
  .blogimg {
  }
  .buttonRow {
    flex-direction: flex-end;
  }
`;

class Blog extends React.Component {
  render() {
    return (
      <BlogDiv>
        <div className="blogbox">
          <div className="blogDetails">
            <div className="blogimgwrapper">
              <div className="blogimg">
                <img src="" alt="some title" />
              </div>
            </div>
            <div className="headlineText">
              <Link to="/">Headline Text - This is some random text</Link>
            </div>
            <div className="headlineSub">A small description</div>
            <div className="buttonRow">
              <button>Download</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </BlogDiv>
    );
  }
}

export default Blog;
