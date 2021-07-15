import React from 'react';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../CartContext/CartContext';

const ItemListContainer = ({ titleSection }) => {
    const {productos} = useCartContext();
    console.log(productos);

    return (
        <div className="ItemListContainer">
            <h1 style={{margin: '2rem auto', textAlign: 'center'}}>{titleSection}</h1>
         <ItemList items={productos} />   
        </div>
    )
}

export default ItemListContainer;
