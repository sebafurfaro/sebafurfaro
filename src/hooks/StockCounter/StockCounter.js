import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FaMinus, FaPlus } from 'react-icons/fa';
import "./StockCounter.scss";

function StockCounter({ stock, onAdd }) {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  const [showLink, setShowLink] = useState(false);

  const handleLink = () => setShowLink(true);

  const multipleAction = () => {
    onAdd(toAdd);
    handleLink();
  }
  
  return (
    <div className="StockCounter">
      <div className="d-flex justify-content-between counter">
        <Button
          className="stockButton"
          onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}
        >
          <FaMinus />
        </Button>
        <div className="stock-number">{toAdd}</div>
        <Button
          className="stockButton"
          onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}
        >
          <FaPlus/>
        </Button>
      </div>
      <Button className="cartButton" onClick={multipleAction}>
        Añadir
      </Button>
      {showLink ? <Link to="/cart" className="btn finishShop">Terminar compra</Link> : null}
    </div>
  );
  
}

export default StockCounter;
