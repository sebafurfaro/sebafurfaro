import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar/NavBar';
import Home from './views/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from './components/CategoryList/CategoryList';

class App extends React.Component {
  render() {
    return(
      <>
        <Router>
          <NavBar />
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/category/:categoryName" component={CategoryList}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
