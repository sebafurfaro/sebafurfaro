import React from 'react';
import './ItemDetail.css';
import StockCounter from './../../../hooks/StockCounter/StockCounter';
import { useCartContext } from '../../../CartContext/CartContext';

const ItemDetail = ({product}) => {
    const {addToCart} = useCartContext();
    const onAdd = qty => addToCart(product, qty);
    return (
        <div className="item-detail" key={product.id}>
            <img src={product.img} alt={product.title} className="img-fluid" />
            <div className="item-detail_content">
                <h1>{product.title}</h1>
                <p className="description">{product.description}</p>
                <h3 className="price">{product.price}</h3>
                <div className="meta-shop">
                    {product.stock > 0 && <StockCounter onAdd={onAdd} stock={product.stock} />}
                </div>
                <div className="meta-category">
                    <p>Categoria: {product.category}</p>
                </div>
            </div>
        </div>  
    )
}

export default ItemDetail;
