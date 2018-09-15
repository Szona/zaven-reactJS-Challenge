import { FETCH_POKEMONS } from './types'; 

const api = "http://localhost:3001";

export const fetchPokemons = () => dispatch => {
    console.log('fdsf');
    fetch(`${api}/pokemon`)
        .then(res => res.json())
        .then(data => 
            dispatch ({
                type: FETCH_POKEMONS,
                data: data
            })
        );    
};