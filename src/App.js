import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import cards from './cards.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends React.Component {

  state = {
    cards,
    score: 0,
    topScore: 0
  }

  componentDidMount = () => {
    const cards = this.state.cards.map(card => { card.hovered = false; return card; });
    this.setState({ cards: cards });
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

  render() {
    return (
      <React.Fragment>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          <div className="wrap-card">
            {this.state.cards.map(card => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  onHover={this.onHover}
                  onHoverOut={this.onHoverOut}
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
