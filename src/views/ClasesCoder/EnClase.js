import React, { useState, useEffect } from 'react';
import './EnClase.css';
import CardComponent from './../../components/CardComponent/CardComponent';
import axios from 'axios';

const EnClase = () => {
    //Si el estado arranca con un is.. se espera que el mismo obtenga un resultado booleano, normalmente false.
    const [isAvailable, setIsAvailable] = useState(false);
    
    const toggleState = () => {
        setIsAvailable(!isAvailable);
    }

    //NASA API
    const [data, setData] = useState({});
    useEffect(() => {
        (async ()=> {
            const result = await axios.get('https://api.nasa.gov/planetary/apod?api_key=6yqi9TlsF3AD0ySGsecZyoXTg4Pr8toAk6uRi7MI');
            setData(result.data);
            console.log(result.data)
        })()
    }, []);

    return (
        <div>
            <h1>Toggle estado</h1>
            {isAvailable ? <p>Esta disponile</p> : <p>No esta disponible</p>}
            <h2>Toggle clase</h2>
            <p className={isAvailable ? "available" : "noavailable"}>Toggle</p>

            <button onClick={toggleState}>Cambiar estado</button>
            <CardComponent copyright={data.copyright} date={data.date} img={data.hdurl} title={data.title} sintesis={data.explanation}/>
        </div>
    )
}

export default EnClase;
