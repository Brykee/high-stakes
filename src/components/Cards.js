import React from "react";
import Card from "./Card";
import "../App.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Cards;
