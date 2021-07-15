import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';
import { Button } from 'semantic-ui-react';
import CardItem from './CartItem/CartItem';
import './Cart.css'

const Cart = () => {
    const { cart, clearCart } = useCartContext();

    if(!cart.length) return <Redirect to="/" />;

    return (
        <div className="cartResult">
            {cart.map((item) => (
                <CardItem carditem={item} />
            ))}
            <Button color='orange' onClick={clearCart}>Vaciar carrito</Button>
        </div>
    )
}

export default Cart
