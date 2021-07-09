import React from 'react';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../context/CartContext';

const ItemListContainer = ({ titleSection }) => {
    const {database} = useCartContext();
    console.log(database);

    return (
        <div className="ItemListContainer">
            <h1>{titleSection}</h1>
         <ItemList items={database} />   
        </div>
    )
}

export default ItemListContainer;
