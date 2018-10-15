import React from "react";

import styled from "styled-components";

const BannerContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .span {
      color: black;
      background-color: #6558;
    }
`;

class BannerContent extends React.Component {
  state = {};
  render() {
    return (
      <BannerContentDiv>
        <div className="span"> {this.props.content} </div>
      </BannerContentDiv>
    );
  }
}

export default BannerContent;
