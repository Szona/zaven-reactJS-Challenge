import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: null
    };
  }

  componentDidMount() {
    const api = "http://localhost:3001";
    fetch(`${api}/pokemon`)
      .then(res => res.json())
      .then(data => {
        this.setState( { pokemons:data } )
        // console.log(this.state);
      })
      .catch(function (error) {});
  }
    
  render() {
    return (
      <div className="app">
        <Pokedex pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
