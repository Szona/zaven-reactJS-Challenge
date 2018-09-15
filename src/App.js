import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

import { connect } from 'react-redux';
import { fetchPokemons } from './actions/dataAction';

class App extends Component { 

  componentWillMount() {
    this.props.fetchPokemons();
  }  

  render() {
    return (
        <div className="app">
          <Pokedex pokemons={this.props.pokemons}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.data.items
});

export default connect(mapStateToProps, { fetchPokemons })(App);
