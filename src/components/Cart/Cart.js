import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';
import { Button, Table } from 'reactstrap';
import CardItem from './CartItem/CartItem';
import './../../Sass/Cart.scss';

const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useCartContext();
    
    console.log(getTotalPrice);
    // show total price
    //   const totalPrice = (item) => {
    //     item.reduce((precioActual, item) => {
    //       return item.price + precioActual
    //     }, 0)
    //   };
    
    if(!cart.length) return <Redirect to="/" />;
    
    return (
        <div className="cartResult container">
            <Table>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio xU</th>
                        <th>Precio Total</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <CardItem carditem={item} key={item.id}/>
                    ))}
                </tbody>
            </Table>
            <div className="precioTotal d-flex align-items-center justify-content-between w-100">
                <div className="label">Precio Total</div>
                <div className="total">AR$</div>
            </div>
            <Button className="clearCart" onClick={clearCart}>Vaciar carrito</Button>
        </div>
    )
}

export default Cart
