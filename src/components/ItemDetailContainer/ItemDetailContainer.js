import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../Loader/Loader';
import ErrorItemNotFound from './../Error/ErrorItemNotFound';
import { useCartContext } from '../../CartContext/CartContext';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const { productos } = useCartContext();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const foundItem = productos.find(el => el.id === id);
        
        if(foundItem) {
            setItem(foundItem)
        } else {
            setError(true);
        }
        setLoading(false);
    }, [id, productos]);

    if(error) return <ErrorItemNotFound />

    if (loading || !item) return <Loader />

    return (
        <div className="container">
            <ItemDetail product={item}/>
        </div>
    )
}

export default ItemDetailContainer;
