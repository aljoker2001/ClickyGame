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
  handleIncrement = (event) => {
    console.log('click', event.target)
    characters.indexOf(event.target.alt) === -1 ? console.log('not found') : console.log('somethings wrong')
    console.log(characters)
    this.setState({score: this.state.score + 1})
    if (event.target.title === 'false' && this.state.score < this.state.top) {
      console.log('is false')
      event.target.title = 'true'
    } else if (event.target.title === 'false' && this.state.score === this.state.top) {
      this.setState({top: this.state.top + 1})
      event.target.title = 'true'
    } else {
      alert(`You already chose ${event.target.alt}.  You suck and you lose.`)
      this.setState({score: 0})
    }
    // if (this.state.score === this.state.top) {
    //   this.setState({top: this.state.score + 1})
    // }
    console.log('score', this.state.score)
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
