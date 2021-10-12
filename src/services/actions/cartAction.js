import { ADD_CART, REMOVE_CART } from '../types';

export const addCartAction = (movie) => {
    return {
        type: ADD_CART,
        payload: movie
    }
}

export const removeCartAction = (id) => {
    return {
        type: REMOVE_CART,
        payload: id
    }
}