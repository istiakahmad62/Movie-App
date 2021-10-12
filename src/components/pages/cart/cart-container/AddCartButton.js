import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCartAction } from '../../../../services/actions/cartAction';

class CartButton extends Component {
    render() {
        const { addCartAction, movie } = this.props;
        return (
            <>
                <a onClick={() => {addCartAction(movie)}} className="btn btn-danger">Add Cart</a>
            </>
        )
    }
}

const addCartContainer = connect(null, { addCartAction })

export default addCartContainer(CartButton);