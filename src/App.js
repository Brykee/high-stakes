import React, { useState } from "react";
import "./App.css";
import cardback from "../src/pics/lesscreepycardback.jpg";
import jesterCard from "../src/pics/jokerCard.jpg";
import card2 from "../src/pics/2card.jpg";
import card3 from "../src/pics/3card.jpg";
import card4 from "../src/pics/4card.jpg";
import card5 from "../src/pics/5card.jpg";
import card6 from "../src/pics/6card.jpg";
import card7 from "../src/pics/7card.jpg";
import card8 from "../src/pics/8card.jpg";
import card9 from "../src/pics/9card.jpg";

const jester = {
  num: 1,
  img: jesterCard,
};

const two = {
  num: 2,
  img: card2,
};
const three = {
  num: 3,
  img: card3,
};
const four = {
  num: 4,
  img: card4,
};
const five = {
  num: 5,
  img: card5,
};
const six = {
  num: 6,
  img: card6,
};
const seven = {
  num: 7,
  img: card7,
};
const eight = {
  num: 8,
  img: card8,
};
const nine = {
  num: 9,
  img: card9,
};

class App extends React.Component {
  // const [cards, setCards] = useState([]);
  // const [turns, setTurns] = useState(0);

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

    function flip() {}

    const cardsElements = shuffle(cardsArray).map((card) => (
      <a>
        <img className="cardPic" src={card.img} alt="cardback" />
      </a>
    ));

    return <div className="table">{cardsElements}</div>;
  }
}

export default App;

{
  /* <img className="front" src={card.img} alt="card front" />
                <img className="back" src={cardback} alt="card back" /> */
}
