import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./components/Pet";

// import SCSS
import Styling from "./../scss/main.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mix" />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
