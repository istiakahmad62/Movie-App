import React, { Component } from 'react';
import { connect } from 'react-redux';
import { popular_movies } from '../../services/actions/fetchAction';
import { mapStateToProps } from '../helper/mapStateToProps';
import MovieRender from './movie-card/MovieRender';

class Home extends Component {
    
    componentDidMount() {
        const { popular_movies } = this.props;
        document.title = "TMDB CLONE"
        popular_movies()
    }
    
    render() {
        const { loading, movies, error} = this.props;
        return(
            <div>
                <MovieRender loading={loading} movies={movies} error={error} />
            </div>
            
        );
    }
}

const connectMovieRender = connect(mapStateToProps, { popular_movies })

export default connectMovieRender(Home); 