import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        
            <div className='header-wrapper'>
                <div className='header-container'>
                    <Link 
                        to='/'
                        className='link'
                    >
                        <div className='name'>
                            Matteo Contini
                        </div>
                    </Link>    
                    <Link 
                        to='/contact'
                        className='link'
                    >    
                        <div className='contact'>
                            Contact
                        </div>                
                    </Link>
                </div>
            </div>
        
    );
}

export default Header;