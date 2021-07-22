import React from 'react';
import StockCounter from './../../../hooks/StockCounter/StockCounter';
import { useCartContext } from '../../../CartContext/CartContext';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './../../../Sass/ItemDetail.scss';

const ItemDetail = ({ product }) => {
    
    const { addToCart } = useCartContext();

    const onAdd = cantidad => addToCart(product, cantidad);
    
    return (
        <Card className="itemDetail" key={product.id}>
            <CardImg
                src={product.img}
                alt={product.title}
                className="img-fluid img-product" />
            <CardBody>
            <div className="itemDetail-content">
                <CardTitle tag="h2">{product.title}</CardTitle>
                <CardText className="description">{product.description}</CardText>
                <div className="separator"></div>
                <CardSubtitle tag="h3" className="price">AR$ {product.price}</CardSubtitle>
                <div className="stock">
                    {product.stock > 0 && <StockCounter onAdd={onAdd} stock={product.stock} />}
                </div>
            </div>
            </CardBody>
        </Card>  
    )
}

export default ItemDetail;
