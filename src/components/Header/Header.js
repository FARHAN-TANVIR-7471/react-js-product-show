import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome Header</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/review">Review</Link>
            </nav>
        </div>
    );
};

export default Header;