import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../../../logo.svg";
import CartWidget from "./../../CartWidget/CartWidget";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import './../../../Sass/NavBar.scss';
import { useCartContext } from "../../../CartContext/CartContext";

const NavBar = () => {

  const { cart } = useCartContext();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  
  const history = useHistory();
  
  const handleChange = (e) => { e.target.value && history.push(`/category/${e.target.value}`); };
  
  const cartCount = cart.length;

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo SebaFurfaro" className="img-fluid" />
              <h1>SebaFurfaro</h1>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Todos</Link>
            </NavItem>
            <ul className="nav-menu">
              <li className="nav-item">
              </li>
              <select className="dropdown" onChange={handleChange}>
                <option value="">Seccionar categorias</option>
                <option value="/Auriculares">Auriculares</option>
                <option value="/Celulares">Celulares</option>
                <option value="/Escritorio">Escritorio</option>
                <option value="/Notebook">Notebook</option>
                <option value="/Periféricos">Periféricos</option>
                <option value="/Relojes">Relojes</option>
                <option value="/Tablet">Tablet</option>
              </select>
              <li className="nav-item AddToCart">
                <Link to="/cart" className="nav-link">
                  <CartWidget />
                </Link>
                <div className={ cartCount > 0 ? 'cartCount' : 'invisible'}>{cartCount}</div>
              </li>
            </ul>
           </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
