import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Score from './components/Score';
import Card from './components/Card';
import cards from './cards.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './App.css';


class App extends React.Component {
  defaultStatus = "Click only on different cards";

  state = {
    cards,
    cardsClicked: [],
    score: 0,
    topScore: 0,
    status: this.defaultStatus,
    guessed: true
  }
  
  getWrapCardsClass = () => {
    const classAnimated = "animated shake"; 

    if (this.state.guessed) {
      return "wrap-card";
    }
    else {
      return `wrap-card ${classAnimated}`;
    }
      
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
        card.image = card.imageOver;
        card.hovered = true;
      }
      return card;
    });

    this.setState({ cards: cards });
  }

  onHoverOut = (id) => {
    const cards = this.state.cards.map(card => {
      if (card.id === id) {
        card.image = card.imageDefault;
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
        topScore,
        guessed: true
      });
      
    }
    else {
      //otherwise end the game and update the state
      this.setState({
        cardsClicked: [],
        status: "You guessed incorrectly!",
        score: 0,
        guessed: false
      });
    }

    //mix up the cards
    this.shuffleArray(cards);
    
  }

  restart = () => {
    this.setState({
      cardsClicked: [],
      status: this.defaultStatus,
      score: 0,
      topScore: 0,
      guessed: true
    });
  }

  render() {
    const { score, topScore, status, cards, guessed } = this.state;
    const getContent = () => {

      if (this.state.score !== 9) {
        return (
          <div className={this.getWrapCardsClass()}>
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
        );
      } else {
        return (
          <div className="victory">
            <h4>YOU WON!!</h4>
            <h4>CONGRATULATIONS!</h4>
            <button className="btn btn-dark" onClick={this.restart}>Play Again</button>
          </div>
        );
      }
    }
    
    return (
      <>
        <Header />
        <Score score={score} topScore={topScore} status={status} guessed={guessed} />
        <main>
          {getContent()}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
