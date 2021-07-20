import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './GlobalStyles.css';
import Navbar from './pages/Navbar';
import Dropdown from './pages/Dropdown';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Dropdown />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route exact path='/shop/:id' children={<SingleProduct />} />
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
