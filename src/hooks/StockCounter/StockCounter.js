import React, { useState } from "react";
import { Button } from 'reactstrap';
import './StockCounter.scss';

function StockCounter({ stock, onAdd }) {
  
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  return(
    <div className="StockCounter">
      <div className="d-flex justify-content-between counter">
        <Button className="stockButton" onClick={ ()=> setToAdd(toAdd - 1 ? toAdd - 1 : toAdd) }>
          -
        </Button>
        <div className="stock-number">{toAdd}</div>
        <Button className="stockButton" onClick={ ()=> setToAdd(toAdd === stock ? toAdd : toAdd +1) }>
          +
        </Button>
      </div>
      <Button className="cartButton" onClick={ ()=> onAdd(toAdd) }>Añadir</Button>
      
    </div>
  )
}

export default StockCounter;
