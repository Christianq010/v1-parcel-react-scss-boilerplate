import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import styled from 'styled-components'

const HomepageDiv = styled.div`
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Our  Main Container */
  #app {
    height: auto;
    display: grid;
  }
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  #app {
    height: auto;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 25%;
    grid-auto-flow: dense;
  }
}
`

const Homepage = () => {
    return ( 
        <HomepageDiv>
            <Navbar />
        </HomepageDiv>
     );
}
 
export default Homepage;