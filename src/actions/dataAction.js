import { FETCH_POKEMONS, NEXT_PAGE, PREV_PAGE } from './types'; 

export const fetchPokemons = (page) => dispatch => {
    const api = `http://localhost:3001/pokemon?_page=${page}&_limit=12`
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
export function previousPage() {
    return {
        type: PREV_PAGE,
        payload: 1
    }
};