import React from "react";

import styled from 'styled-components'

const App = styled.div`
  background: palevioletred;
  color: white;
`

export const Pet = props => {
  return (
    <App>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </App>
  );
};
