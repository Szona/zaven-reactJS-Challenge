import { FETCH_POKEMONS, NEXT_PAGE, PREV_PAGE } from '../actions/types'; 

const initialState = {
    pokemons: {},
    page: 1,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }  
        case NEXT_PAGE:
            if (state.page < 13 ) {
                return {
                    ...state,
                    page: state.page + action.payload
                }
            } else {
                return {
                    ...state,
                    page: 13
                }
            }
        case PREV_PAGE:
            if (state.page === 1) {
                return {
                    ...state,
                    page: 1
                }
            } else {
                return {
                    ...state,
                    page: state.page - action.payload
                }
            }
        default:
            return state;
    }
}

