import React from "react";
import "../App.css";
import cardback from "../pics/lesscreepycardback.jpg";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img className="cardPic" src={cardback} alt="cardback" />
      </div>
    );
  }
}

export default Card;
