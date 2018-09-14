import React, { Component } from 'react';

class Pokemon extends Component {
    
    pokemonTypes() {
        const types = this.props.type; 
        console.log(types);
        const list = types.map(type => {
            return (
                <li className={`type ${type.toLowerCase()}`} key="type">
                    {type}
                </li>
            )
        });
        return list;
    } 
    render () {
        return (
            <div className="pokemon-wrap">
                <img className="pokemon-img" src={this.props.img} alt=""/>
                <div className="name">
                    <span className="number">#{this.props.num}</span>
                    {this.props.name}
                </div>
                <ul className="types">
                    {this.pokemonTypes()}
                </ul>
            </div>
        )
    }
}
export default Pokemon;