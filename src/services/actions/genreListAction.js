import axios from 'axios';
import { API_KEY } from '../../API';
import { GENRE_LIST_REQUEST } from '../types';

export const genreList = (id) => {
    var url = `https://api.themoviedb.org/3/genre/${id}?api_key=${API_KEY}`

    return async (dispatch) => {
        const res = await axios.get(url);
        console.log("Genre: ",id);

        dispatch({
            type: GENRE_LIST_REQUEST,
            genre_id: id,
            genre_name: res.data.name
        })
    }
}