import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Sass/App.scss";
//components
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Cart from "./components/Cart/Cart";
// views
import Home from "./views/Home/Home";
//context
import { CartProvider } from "./CartContext/CartContext";
class App extends React.Component {
  render() {
    return (
      <>
        <CartProvider>
          <Router>
            <NavBar />
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/category/:categoryName"
               
              ></Route>
              <Route
                path="/item/:id"
                component={ItemDetailContainer}></Route>
              <Route
                path="/cart"
                component={Cart}></Route>
            </Switch>
          </Router>
        </CartProvider>
      </>
    );
  }
}

export default App;
