import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import Loader from './../Loader/Loader';

const ItemListContainer = ({titleSection}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            (async ()=> {
                const {data} = await axios.get('https://mocki.io/v1/9324d06c-aede-4a4e-8b10-b8173cb81da1')
                setItems(data);
                setLoading(false);
            })();
        }, 2000);
    }, []);

    if(loading) return <Loader />

    return (
        <div className="ItemListContainer">
            <h1>{titleSection}</h1>
         <ItemList items={items} />   
        </div>
    )
}

export default ItemListContainer;
