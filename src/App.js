import React from 'react';
import Header from './components/Header';
import Score from './components/Score';
import Card from './components/Card';
import cards from './cards.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends React.Component {

  state = {
    cards,
    cardsClicked: [],
    score: 0,
    topScore: 0,
    status: "Click only on different cards"
  }

  componentDidMount = () => {
    const cards = this.state.cards.map(card => { card.hovered = false; return card; });
    this.setState({ cards: cards });
  }

  shuffleArray = array => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  onHover = (id) => {
    const cards = this.state.cards.map(card => {
      if (card.id === id) {
        card.image = card.image.replace("/img", "/img-over");
        card.hovered = true;
      }
      return card;
    });

    this.setState({ cards: cards });
  }

  onHoverOut = (id) => {
    const cards = this.state.cards.map(card => {
      if (card.id === id) {
        card.image = card.image.replace("img-over", "img");
        card.hovered = false;
      }
      return card;
    });

    this.setState({ cards: cards });
  }

  onCardClick = (id) => {
    let { cardsClicked, score, topScore, cards } = this.state;

    //if the card id is found on the cardsClicked array
    if (cardsClicked.filter(card => card.id === id).length === 0) {
      //add points
      score++;
      if (score > topScore) {
        topScore++
      }
      //add the id clicked on the cardsClicked array
      cardsClicked.push({ id: id });

      //update the state
      this.setState({
        cardsClicked,
        status: "You guessed correctly!",
        score,
        topScore
      });
      
    }
    else {
      //otherwise end the game and update the state
      this.setState({
        cardsClicked: [],
        status: "You guessed incorrectly!",
        score: 0
      });
    }

    //mix up the cards
    this.shuffleArray(cards);
    
  }

  render() {
    const { score, topScore, status, cards } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Score score={score} topScore={topScore} status={status} />
        <div className="container">
          <div className="wrap-card">
            {cards.map(card => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  onHover={this.onHover}
                  onHoverOut={this.onHoverOut}
                  onCardClick={this.onCardClick}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
