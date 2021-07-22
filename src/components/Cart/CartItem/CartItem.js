import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../../CartContext/CartContext';
import './../../../Sass/CartItem.scss'

const CartItem = ({ carditem }) => {

    const {delItemCart} = useCartContext;

    return (
        <tr>
            <th className="text-center">{carditem.quantity}</th>
            <th className="text-center">{carditem.title}</th>
            <th className="text-center">AR$ {carditem.price}</th>
            <th className="text-center">AR$ {carditem.quantity * carditem.price}</th>
            <th className="text-center">
                <button onClick={delItemCart} className="deteleItemCart"><FaTrash /></button>
            </th>
        </tr>
    )
}

export default CartItem
