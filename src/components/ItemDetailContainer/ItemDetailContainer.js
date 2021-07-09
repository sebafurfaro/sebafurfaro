import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import Loader from './../Loader/Loader';
import ErrorItemNotFound from './../Error/ErrorItemNotFound';
import { useCartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const {database} = useCartContext();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const foundItem = database.find(el => el.id === +id);
        if(foundItem) {
            setItem(foundItem)
        } else {
            setError(true);
        }
        setLoading(false);
    }, [id, database]);

    if(error) return <ErrorItemNotFound />

    if (loading || !item) return <Loader />

    return (
        <div>
            <ItemDetail product={item}/>
        </div>
    )
}

export default ItemDetailContainer;
