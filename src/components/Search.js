import React from "react";

import styled from "styled-components";

const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .span {
      color: black;
      background-color: #6558;
    }
`;

class Search extends React.Component {
  state = {};
  render() {
    return (
      <SearchDiv>
        <span className="span">Search</span>
      </SearchDiv>
    );
  }
}

export default Search;
