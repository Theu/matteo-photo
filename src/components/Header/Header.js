import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <Link 
            to='/'
        >
            <div className='header-wrapper'>
                <div className='header-container'>
                    <div className='name'>
                        Matteo Contini
                    </div>
                    <div className='contact'>
                        Contact
                    </div>                
                </div>
            </div>
        </Link>
    );
}

export default Header;