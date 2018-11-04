import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <Link 
            to='/'
        >
            <div className='header-wrapper'>
                Matteo Contini
            </div>
        </Link>
    );
}

export default Header;