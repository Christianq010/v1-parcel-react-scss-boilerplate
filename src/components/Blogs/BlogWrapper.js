import React from "react";
import styled from "styled-components";

import Blog from "./Blog";

const BlogWrapperDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 5 / 6;
    grid-column: 1 / -1;
    height: auto;
    background-color: #6518;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 5 / 6;
    grid-column: 2 / 14;
    height: auto;
    background-color: #6518;
  }
`;

const Blogs = styled.div`
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
  }
`;

class BlogWrapper extends React.Component {
  render() {
    return (
      <BlogWrapperDiv>
        <p>This is the blog wrapper</p>
        <Blogs>
            <Blog />
            <Blog />
            <Blog />
        </Blogs>
      </BlogWrapperDiv>
    );
  }
}

export default BlogWrapper;
