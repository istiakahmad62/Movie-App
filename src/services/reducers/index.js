import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import fetchMoviesReducer from "./fetchReducer";
import genreListReducer from "./genreListReducer";

export default combineReducers({
    fetchMoviesReducer,
    cartReducer,
    genreListReducer,
})