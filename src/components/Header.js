import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faGlobe, faGuitar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>UGGlee SHoes store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </Link>
                <Link to="/signup">
                    <FontAwesomeIcon icon={faSignInAlt} /> Sign Up
                </Link>
                <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                
            
                <div className="language-change">
                    <FontAwesomeIcon icon={faGlobe} />
                    <select>
                        <option value="en">English</option>
                        <option value="ka">ქართული</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}

export default Header;