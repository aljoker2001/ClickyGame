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
    console.log('selected pokemon', event.target)
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
      this.win()
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
      this.win()
      this.randomCharacter(characters)
    } else {
      console.log('clicked status', event.target.title)
      alert(`You already chose ${event.target.alt}.  You suck and you lose.\nTry again.`)
      this.setState({ score: 0 })
      for (let i in characters) {
        characters[i].clicked = false
      }
      this.randomCharacter(characters)
    }
  }
  
  win = () => {
    if (this.state.score === 11) {
      console.log('winner winner chicken dinner')
      alert('You selected each Pokemon without any duplicates.\nCongratulations!\nGet ready to play again.')
      this.setState({ score: 0 })
      for (let i in characters) {
        characters[i].clicked = false
        console.log('character after win', characters[i])
      }

    }
  }

  randomCharacter = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }

  render() {
    console.log(this.state.characters)
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

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
