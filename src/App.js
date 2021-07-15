import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar/NavBar';
import Home from './views/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from './components/CategoryList/CategoryList';
import {CartProvider} from './CartContext/CartContext';
import Cart from './components/Cart/Cart';

class App extends React.Component {
  render() {
    return(
      <>
        <CartProvider>
          <Router>
            <NavBar />
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/category/:categoryName" component={CategoryList}></Route>
              <Route path="/item/:id" component={ItemDetailContainer}></Route>
              <Route path="/cart" component={Cart}></Route>
            </Switch>
          </Router>
        </CartProvider>
      </>
    );
  }
}

export default App;
