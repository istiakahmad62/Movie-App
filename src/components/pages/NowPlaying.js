import React, { Component } from 'react';
import { connect } from 'react-redux';
import { now_playing } from '../../services/actions/fetchAction';
import { mapStateToProps } from '../helper/mapStateToProps';
import MovieRender from './movie-card/MovieRender';

class NowPlaying extends Component {
    
    componentDidMount() {
        const { now_playing } = this.props;
        document.title = "Now Playing";
        now_playing()
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

const connectMovieRender = connect(mapStateToProps, { now_playing })

export default connectMovieRender(NowPlaying); 