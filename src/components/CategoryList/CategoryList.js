import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemList from './../ItemListContainer/ItemList/ItemList';
import Loader from './../Loader/Loader';

const CategoryList = () => {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            (async()=>{
                const {data} = await axios.get('https://mocki.io/v1/9324d06c-aede-4a4e-8b10-b8173cb81da1')
                if(!categoryName) return setItems(data);
                const catItems = data.filter(item=> item.category === categoryName);
                setItems(catItems);
                setLoading(false)
            })();
        }, 2000);
    },[categoryName]);

    if(loading) return <Loader />

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default CategoryList;
