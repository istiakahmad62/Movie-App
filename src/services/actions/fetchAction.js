import { API_KEY } from "../../API";
import { fetchMovie } from "./fetchAction/fetchMovie";

export const popular_movies = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    return fetchMovie(url);
}

export const now_playing = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
    return fetchMovie(url);
}

export const top_rated = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`
    return fetchMovie(url);
}