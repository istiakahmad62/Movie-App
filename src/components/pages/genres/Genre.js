import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genre extends Component {
    render() {
        const { genres, genre_list } = this.props;
        return (
            <div className="genres">
                {
                    genres.map(id => {
                        return genre_list.map(item => {
                            if (item.id === id) {
                                return <p className="genre-card bg-primary text-white">{item.name}</p>
                            }
                        });
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    genre_list: state.genreListReducer.genre_list,
})

const connectGenreContainer = connect(mapStateToProps, null)

export default connectGenreContainer(Genre)