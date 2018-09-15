import { FETCH_POKEMONS } from '../actions/types'; 

const initialState = {
    items: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}

