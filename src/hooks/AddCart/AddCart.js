import React from 'react';
import { Link } from 'react-router-dom';
import './AddCart.css';

const AddCart = () => {
    return (
        <>
          <Link type="button" className="AddToCart">Add to cart</Link>  
        </>
    )
}

export default AddCart;
