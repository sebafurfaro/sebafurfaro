import React from 'react';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../CartContext/CartContext';
import './../../Sass/ItemListContainer.scss';

const ItemListContainer = ({ titleSection }) => {
    
    const {productos} = useCartContext();

    return (
        <div id="ItemListContainer" className="mt-3 container">
            <h1 className="section-title" style={{margin: '2rem auto', textAlign: 'center'}}>{titleSection}</h1>
            <ItemList items={productos} />   
        </div>
    )
}

export default ItemListContainer;
