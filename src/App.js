import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Pokedex from './components/Pokedex';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { fetchPokemons, nextPage, previousPage } from './actions/dataAction';


class App extends Component { 

  componentDidMount() {
    this.props.fetchPokemons();
  }  

  async handlePreviousPage() {
    await this.props.previousPage();
    this.props.fetchPokemons(this.props.page);
  }

  async handleNextPage() {
    await this.props.nextPage();
    this.props.fetchPokemons(this.props.page);
  }

  render() {
    return (
        <div className="app">
          <Pokedex pokemons={this.props.pokemons} />
          <Pagination 
            page={this.props.page} 
            prevPage={() => this.handlePreviousPage()}
            nextPage={() => this.handleNextPage()} 
            />
        </div>
    );
  }
}

App.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  pokemons: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
  page: state.data.page
});

export default connect(mapStateToProps, { fetchPokemons, nextPage, previousPage })(App);
