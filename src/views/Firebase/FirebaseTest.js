import React, { useState, useEffect } from 'react';

import { db } from '../../Firebase';
import CardProduct from './CardProduct';


const FirebaseTest = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        const docs = [];
        db.collection("productos").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
                //console.log(docs)
            });
            setProductos(docs)
        });
    }

    useEffect(() => {
        getProductos();
    }, [])

    return (
        <div>
            <h1>Trayendo la data de Firebase (Harmoso!)</h1>
            {productos.map((item) =>{
                return(
                    <div key={item.id}>
                        <CardProduct data={item} />
                    </div>
                );
            })}
        </div>
    )
}

export default FirebaseTest
