import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieRender extends Component {
    render() {
        const { loading, movies, error} = this.props;
        return (
            <div>
                {
                    loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : <div className="movies"> 
                    {
                        movies.map(movie => {
                            return <MovieCard key={movie.id} movie={movie} /> 
                        })
                    }
                    </div>
                }
            </div>
        );
    }
}

export default MovieRender;