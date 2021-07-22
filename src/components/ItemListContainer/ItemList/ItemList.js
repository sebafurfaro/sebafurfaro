import React from 'react';
import Item from './Item/Item';

const ItemList = ({ items }) => {
    return (
        <div className="row" id="ItemList">
            {items.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ItemList;
