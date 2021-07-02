import React from 'react';
import Item from './Item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="ItemList">
            {items.map((item) =>(
                <Item key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ItemList;
