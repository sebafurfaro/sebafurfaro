import React from 'react';
import Greeting from './Greeting/Greeting';
import './../../Sass/Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <Greeting greeting="¡Bienvenidos!" />
        </div>
    )
}

export default Header;
