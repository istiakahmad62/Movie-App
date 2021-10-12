import React, { Component } from 'react';
import { connect } from 'react-redux';
import { genreList } from '../../../services/actions/genreListAction';

class GenreContainer extends Component {

    render() {
        const { genres, genreList } = this.props;
        return(
            <div className="genres">
                {
                    genres.map(id => {
                        genreList(id)
                    })
                }
            </div>
        )
    }
}

const connectGenreContainer = connect(null, { genreList })

export default connectGenreContainer(GenreContainer);