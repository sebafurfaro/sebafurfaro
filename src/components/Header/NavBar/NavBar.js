import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../../../logo.svg";
import CartWidget from "./../../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory();
  const handleChange = (e) => { e.target.value && history.push(`/category/${e.target.value}`); };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="img-fluid" />
          <h1>SebaFurfaro</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              ItemListContainer
            </Link>
          </li>
          <select className="dropdown" onChange={handleChange}>
            <option value="">Seccionar categorias</option>
            <option value="Auriculares">Auriculares</option>
            <option value="Celulares">Celulares</option>
            <option value="Escritorio">Escritorio</option>
            <option value="Notebook">Notebook</option>
            <option value="Periféricos">Periféricos</option>
            <option value="Relojes">Relojes</option>
            <option value="Tablet">Tablet</option>
          </select>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
