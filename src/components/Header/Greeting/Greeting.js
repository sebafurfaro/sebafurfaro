import React from 'react';

const Greeting = ({greeting}) => {
    return (
        <div className="greeting">
            <h1>{greeting}</h1>
        </div>
    )
}

export default Greeting;
