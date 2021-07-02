import React from 'react';
import './ItemDetail.css';
import StockCounter from './../../../hooks/StockCounter/StockCounter';
import AddCart from './../../../hooks/AddCart/AddCart';

const ItemDetail = ({id, title, description, price, category, pictureUrl}) => {
    return (
        <div className="item-detail" key={id}>
            <img src={pictureUrl} alt={title} className="img-fluid" />
            <div className="item-detail_content">
                <h1>{title}</h1>
                <p className="description">{description}</p>
                <h3 className="price">{price}</h3>
                <div className="meta-shop">
                    <StockCounter inStock="5" />
                    <AddCart />
                </div>
                <div className="meta-category">
                    <p>Categoria: {category}</p>
                </div>
            </div>
        </div>  
    )
}

export default ItemDetail;
