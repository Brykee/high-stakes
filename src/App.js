import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import cardback from "../src/pics/lesscreepycardback.jpg";

const jester = {
  num: 1,
  img: cardback,
};

const two = {
  num: 2,
  img: cardback,
};
const three = {
  num: 3,
  img: cardback,
};
const four = {
  num: 4,
  img: cardback,
};
const five = {
  num: 5,
  img: cardback,
};
const six = {
  num: 6,
  img: cardback,
};
const seven = {
  num: 7,
  img: cardback,
};
const eight = {
  num: 8,
  img: cardback,
};
const nine = {
  num: 9,
  img: cardback,
};

class App extends React.Component {
  render() {
    const cardsArray = [
      jester,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
    ];

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    const cardsElements = shuffle(cardsArray).map((card) => (
      <a>
        <img className="cardPic" src={cardback} alt="cardback" />
        {card.num}
      </a>
    ));

    return <div className="table">{cardsElements}</div>;
  }
}

export default App;
