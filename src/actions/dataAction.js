import { FETCH_POKEMONS, NEXT_PAGE, PREV_PAGE } from './types'; 

const api = 'http://localhost:3001/pokemon?_page=${pageNum}&_limit=12'

export const fetchPokemons = (pageNum) => dispatch => {
    fetch(api)
        .then(res => res.json())
        .then(data => 
            dispatch ({
                type: FETCH_POKEMONS,
                payload: data
            })
        );    
};
export function nextPage() {
    return {
        type: NEXT_PAGE,
        payload: 1
    }
};
export function prevPage() {
    return {
        type: PREV_PAGE,
        payload: 1
    }
};