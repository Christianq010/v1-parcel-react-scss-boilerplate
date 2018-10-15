import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

// import SCSS
import Styling from "./scss/main.scss";

import Homepage from "./Views/Homepage";
import Search from "./Views/Search";

class App extends React.Component {
  state = {
    random: true
  };
  render() {
    return (
      <div>
        <header>
          <Link to="/">link to home</Link>
        </header>
        <Router>
          <Homepage path="/" />
          <Search path="/search" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
