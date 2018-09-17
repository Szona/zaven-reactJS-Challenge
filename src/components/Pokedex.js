import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {

    listPokemons() {
        const pokemons = this.props.pokemons;
        if (typeof pokemons !== 'undefined' && pokemons !== null) {
            if (pokemons.length > 0) {
                const pokemonList = pokemons.map(pokemon => {
                    return (
                        <Pokemon id={pokemon.id} img={pokemon.img} num={pokemon.num} name={pokemon.name} type={pokemon.type} />
                    )
                });
                return pokemonList
            } else {
                return <p>There are no Pokemons in this Pokedex.</p>
            }
        }
    }
    render() {
        return (
            <div className="pokedex">
                {this.listPokemons()}
            </div>
        )
    }
}

export default Pokedex;