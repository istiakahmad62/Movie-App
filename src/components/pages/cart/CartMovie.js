import React, { Component } from 'react';
import Genre from '../genres/Genre';
import GenreContainer from '../genres/GenreContainer';
import RemoveCartButton from './cart-container/RemoveCartButton';

class CartMovie extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="card" style={{margin: '0 3rem'}}>
                <div className="card-body">
                    <h5><span>{movie.title}</span><span style={{color: "red", float: "right"}}>50$</span></h5>
                    <GenreContainer genres={movie.genre_ids} />
                    <Genre genres={movie.genre_ids} />
                    <RemoveCartButton movie={movie} />
                </div>
            </div>
        )
    }
}

export default CartMovie;