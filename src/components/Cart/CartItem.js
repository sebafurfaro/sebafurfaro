import React from 'react';
import './CardItem.css';

const CartItem = ({ carditem }) => {
    return (
        <div className="itemCell">
            <h4>{carditem.title}</h4>
            <span className="quantity">Cant: {carditem.quantity}</span>
        </div>
    )
}

export default CartItem
