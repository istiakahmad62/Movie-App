import React, { Component } from 'react';
import AddCartButton from '../cart/cart-container/AddCartButton';
import Genre from '../genres/Genre';
import GenreContainer from '../genres/GenreContainer';

class MovieCard extends Component {
    render() {
        const image_url = "https://image.tmdb.org/t/p/w500/"
        const { movie } = this.props;
        return(
            <div className="movie-card">
                <img className="card-img-top" src={image_url+movie.poster_path} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <GenreContainer genres={movie.genre_ids} />
                    <Genre genres={movie.genre_ids} />
                </div>
                <div className="footer mb-auto">
                    <span id="card-price">50$
                        <AddCartButton movie={movie} />
                    </span>
                </div>
            </div>
        )
    }
}

export default MovieCard;