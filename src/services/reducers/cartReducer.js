import { ADD_CART, REMOVE_CART } from '../types';

const initialState = {
    movies: [],
    price: 0
}

export default function(state=initialState, action) {
    //console.log(state)
    switch (action.type) {
        case ADD_CART:
            let exist_movie = state.movies.find(movie => {
                return movie.id === action.payload.id
            })
            if (exist_movie) {
                return {
                    ...state
                }
            }
            else{
                return {
                    ...state,
                    movies: [...state.movies, action.payload],
                    price: state.price + 50,
                }
            }
        case REMOVE_CART:
            let rest_movies = state.movies.filter(movie => {
                return action.payload !== movie.id
            })
            return {
                ...state,
                movies: rest_movies,
                price: state.price - 50, 
            }
        default:
            return state
    }
}