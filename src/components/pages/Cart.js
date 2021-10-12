import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartMovie from './cart/CartMovie';

class Cart extends Component {
    componentWillMount() {
        document.title = "Cart";
    }
    
    render() {
        const { movies, price } = this.props;
        return (
            <div>
                <div>
                {
                    movies.map(movie => {
                        return <CartMovie key={movie.id} movie={movie} />
                    })
                }
                </div>
                <h4 style={{margin: "0 3rem",float: 'right'}}>Subtotal: {price}$</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.cartReducer.movies,
    price: state.cartReducer.price,
})

const cartContainer = connect(mapStateToProps, null)

export default cartContainer(Cart);