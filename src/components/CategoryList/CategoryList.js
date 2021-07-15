import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './../ItemListContainer/ItemList/ItemList';
import Loader from './../Loader/Loader';
import { useCartContext } from '../../CartContext/CartContext';

const CategoryList = () => {
    const { categoryName } = useParams();
    const { categorias } = useCartContext();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const foundCat = categorias.find(el => el.category === categoryName);
        if(foundCat) {
            setItems(foundCat)
        } else {
            setError(true)
        }
        setLoading(false);
    },[categoryName]);

    if (error) return <h1>No se encontraron productos para la categoria seleccionada</h1>
    
    if(loading || !categoryName ) return <Loader />

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default CategoryList;
