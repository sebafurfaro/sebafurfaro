import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import "./StockCounter.css";

function StockCounter({ stock, onAdd }) {
  
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  return(
    <div className="StockCounter">
      <div>
        <button className="stockButton" type="button" onClick={ ()=> setToAdd(toAdd - 1 ? toAdd - 1 : toAdd) }>
          <Icon name="minus" />
        </button>
        <div className="stock-number">{toAdd}</div>
        <button className="stockButton" type="button" onClick={ ()=> setToAdd(toAdd === stock ? toAdd : toAdd +1) }>
          <Icon name="plus" />
        </button>
      </div>
      <button type="button" className="cartButton" onClick={ ()=> onAdd(toAdd) }>Añadir al carrito</button>
    </div>
  )
}

export default StockCounter;
