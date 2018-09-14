import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import { Provider } from 'react-redux';

class App extends Component {    
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Pokedex pokemons={this.state.pokemons}/>
        </div>
      </Provider>
    );
  }
}

export default App;
