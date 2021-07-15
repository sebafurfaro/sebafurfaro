import React, { useState } from 'react';
import DeleteItem from '../../../hooks/DeleteItem/DeleteItem';
import './CardItem.css';

const CartItem = ({ carditem }) => {
    const [isOut, setIsOut] = useState(false)
    const delItem = () => {
        setIsOut(!isOut)
    }
    return (
        <div className="itemCell">
            <table className={isOut ? "d-none" : "d-flex"}>
                <tr>
                    <th>
                        <h4>{carditem.title}</h4>
                    </th>
                    <th>
                        <span className="quantity">Cant: {carditem.quantity}</span>
                    </th>
                    <th>
                        <span className="totalPrice">${carditem.quantity * carditem.price}</span>
                    </th>
                    <th>
                        <button type="button" onClick={delItem}>
                            <DeleteItem />
                        </button>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default CartItem
