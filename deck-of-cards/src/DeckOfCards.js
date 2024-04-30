import './App.css';
import {useState} from 'react';

const CARD_SUITS = [
  "♠",
  "♥",
  "♦",
  "♣"
];

const CARD_VALUES = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
];

function Card({value, suit}) {
    
    const suitColor = (suit === "♥" || suit ===  "♦") ? 'red' : 'black'
      return (
        <div className="cards-container">
          <span className={`card-suit ${suitColor}`}>{suit}</span>
          <span className="card-value">{value}</span>
          <span className={`card-suit-inverted ${suitColor}`}>{suit}</span>
        </div>
      )
}  

function DeckOfCards() {
    const generateDeck = () => {
        const tmpDeck = [];

        for (const suit of CARD_SUITS) {
            for (const value of CARD_VALUES) {
                tmpDeck.push( {
                    suit,
                    value
                });
            }
        }
    
        return tmpDeck;
    }

    const shuffleDeck = () => {
        const randomCards = [...deck].sort(() => Math.random()-0.7);
        setDeck(randomCards);
    }
    
    const dealHand = () => {
        shuffleDeck();
        const hand = [...deck].slice(0,5);
        setHand(hand);
        console.log(hand);
    }

    const [deck, setDeck] = useState(generateDeck);
    const [hand, setHand] = useState([]);

    return (
        <div>
        <button type="submit" onClick={dealHand}>
            Deal a hand
        </button>
        
        <div>
            {hand.map((card, idx) => {
            return <Card value={card.value} suit={card.suit}/>
            })}
        </div>
        </div>
    );
}


export default DeckOfCards;
