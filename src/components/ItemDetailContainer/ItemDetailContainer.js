import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import Loader from './../Loader/Loader';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            (async ()=> {
                const {data} = await axios.get('https://mocki.io/v1/9324d06c-aede-4a4e-8b10-b8173cb81da1')
                const foundItem = data.find( item=> item.id === +id );
                setItem(foundItem);
                setLoading(false);
            })();
        },2000);
    }, [id]);

    if (loading) return <Loader />

    return (
        <div>
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer;
