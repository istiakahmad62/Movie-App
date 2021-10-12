import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="left-nav">
                    <Link className="logo" to="/">
                        TMDB CLONE
                    </Link>
                    <div className="subnav">
                        <button className="subnavbtn">Movies</button>
                        <div className="subnav-content">
                            <Link className="popular" to="/">Popular</Link><br/><br/>
                            <Link className="now-playing" to="/now-playing">Now Playing</Link><br/><br/>
                            <Link className="top-rated" to="/top-rated">Top Rated</Link><br/><br/>
                        </div>
                    </div>
                </div>
                <div className="right-nav">
                    <Link className="cart" to="/cart">
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;