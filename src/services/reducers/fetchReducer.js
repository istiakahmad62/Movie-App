import { GET_USER_FAILED, GET_USER_SUCCESS, USER_REQUEST } from "../types";

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

export default function(state=initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            } 
        case GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload,
            }
        default:
            return state
    }
}