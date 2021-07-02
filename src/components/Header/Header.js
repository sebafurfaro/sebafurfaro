import React from 'react';
import Greeting from './Greeting/Greeting';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Greeting greeting="¡Bienvenidos!" />
        </div>
    )
}

export default Header;
