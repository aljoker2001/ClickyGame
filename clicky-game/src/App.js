import React from 'react';
import './App.css';
import Character from './components/Character/Characters.js'
import characters from './characters.json'
import Wrapper from './components/Wrapper.js'
import Header from './components/Header/Header.js'

class App extends React.Component {
  state = {
    characters: characters,
    score: 0,
    top: 0
  }

  // This method increases the current and top scores while at the same time calling the randomCharacter function after each click
  handleIncrement = (event) => {
    // assigns "pokemon" as the selected pokemon
    let pokemon = event.target.alt
    // This will increase the current score, but not the top score if the current round is beneath the top score
    if (event.target.title === 'false' && this.state.score < this.state.top) {
      this.setState({ score: this.state.score + 1 })
      event.target.title = 'true'
      for (let i of characters) {
        if (pokemon === i.name) {
          i.clicked = true
        }
      }
      this.win(event)
      this.randomCharacter(characters)
      // This will increase both the top and current score if the correct answer brings the score past the top score
    } else if (event.target.title === 'false' && this.state.score === this.state.top) {
      this.setState({ score: this.state.score + 1 })
      this.setState({ top: this.state.top + 1 })
      event.target.title = 'true'
      for (let i of characters) {
        if (pokemon === i.name) {
          i.clicked = true
        }
      }
      this.win(event)
      this.randomCharacter(characters)
      // If the user selects an already selected pokemon, the game will end and reset, leaving the top score the same
    } else {
      alert(`You already chose ${event.target.alt}.  You suck and you lose.\nTry again.`)
      this.setState({ score: 0 })
      for (let i in characters) {
        characters[i].clicked = false
      }
      this.randomCharacter(characters)
    }
  }
  // Checks to see if the user reached the top score.  If so, they are alerted and the game resets, leaving the top score as 12
  win = (event) => {
    if (this.state.score === 11) {
      event.target.title = 'false'
      alert('You selected each Pokemon without any duplicates.\nCongratulations!\nGet ready to play again.')
      for (let i in characters) {
        characters[i].clicked = false
      }
      this.setState({ score: 0 })
    }
  }
// Randomizes the order of the pokemon sent to the Character component
  randomCharacter = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          top={this.state.top}
        />
        <div className="d-flex flex-wrap">
          {this.state.characters.map((character) => (
            <Character
              key={character.id}
              image={character.image}
              name={character.name}
              clicked={character.clicked}
              score={this.state.score}
              top={this.state.top}
              handleIncrement={this.handleIncrement}
            >
            </Character>
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
