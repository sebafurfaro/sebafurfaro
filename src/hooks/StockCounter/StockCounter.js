import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import "./StockCounter.css";

function StockCounter({inStock}) {
  const [stock, setStock] = useState(0);

  const moreStock = () => {
    if( stock < inStock ) {
      setStock(stock + 1);
    }
  };
  const lessStock = () => {
    if( stock > 0 ) {
      setStock(stock - 1);
    } 
  };
  return(
    <div className="StockCounter">
        <button className="stockButton" type="button" onClick={lessStock}>
          <Icon name="minus" />
        </button>
        <div className="stock-number">{stock}</div>
        <button className="stockButton" type="button" onClick={moreStock}>
          <Icon name="plus" />
        </button>
    </div>
  )
}

export default StockCounter;
