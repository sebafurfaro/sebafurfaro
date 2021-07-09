import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react';

const ErrorItemNotFound = ({ error }) => {
    const history = useHistory();
    function handleClick() {
            history.push('/');
        }
    return (
        <div className="container">
            <h1>{error}</h1>
            <Button color='green' onClick={handleClick}>Volver al inicio</Button>
        </div>
    )
}

ErrorItemNotFound.defaultProps = {
    error: 'Producto no disponible',
}

export default ErrorItemNotFound;
