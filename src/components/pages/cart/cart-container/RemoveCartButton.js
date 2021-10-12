import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCartAction } from '../../../../services/actions/cartAction';

class CartButton extends Component {
    render() {
        const { removeCartAction, movie } = this.props;
        return (
            <div>
                <a onClick={() => {removeCartAction(movie.id)}} className="btn btn-danger">Remove Cart</a>
            </div>
        )
    }
}

const removeCartContainer = connect(null, { removeCartAction })

export default removeCartContainer(CartButton);