import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { fetchPokemons, nextPage, previousPage } from './actions/dataAction';


class App extends Component { 

  componentDidMount() {
    this.props.fetchPokemons();
    
  }  

  handlePreviousPage() {
    this.props.previousPage();
    this.props.fetchPokemons(this.props.page);
  }

  handleNextPage() {
    this.props.nextPage();
    this.props.fetchPokemons(this.props.page);
  }

  render() {
    return (
        <div className="app">
          <Pokedex pokemons={this.props.pokemons} />
          <Pagination page={this.props.page} 
          prevPage={() => this.handlePreviousPage()}
          nextPage={() => this.handleNextPage()}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
  page: state.data.page
});

export default connect(mapStateToProps, { fetchPokemons, nextPage, previousPage })(App);
