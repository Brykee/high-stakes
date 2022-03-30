import React from "react";
import "./App.css";
import Cards from "./components/Cards";

class App extends React.Component {
  render() {
    function renderGame() {}

    return (
      <div className="table">
        <button className="startBtn" onClick={renderGame}>
          Start Game
        </button>
      </div>
    );
  }
}

export default App;
