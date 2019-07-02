import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCard from './components/Characters.js'
import characters from './characters.json'
import Wrapper from './components/Wrapper.js'
import Header from './components/Header/Header.js/index.js'

class App extends React.Component {
  state = {
    characters: characters
  }
  render() {
    console.log(this.state.characters)
    return (
      <Wrapper>
        <Header />
          <div className="d-flex flex-wrap">
            {this.state.characters.map((character) => (
              <AddCard
                key={character.id}
                image={character.image}
                name={character.name}
              >
              </AddCard>
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
