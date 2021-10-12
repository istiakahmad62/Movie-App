import React, { Component } from 'react';
import { connect } from 'react-redux';
import { top_rated } from '../../services/actions/fetchAction';
import { mapStateToProps } from '../helper/mapStateToProps';
import MovieRender from './movie-card/MovieRender';

class TopRated extends Component {
    
    componentDidMount() {
        const { top_rated } = this.props;
        document.title = "Top Rated";
        top_rated()
    }
    
    render() {
        const { loading, movies, error} = this.props;
        return(
            <div>
                <MovieRender loading={loading} movies={movies} error={error} />
                <button type="button">Popular Movies</button>
            </div>
            
        );
    }
}

const connectMovieRender = connect(mapStateToProps, { top_rated })

export default connectMovieRender(TopRated); 