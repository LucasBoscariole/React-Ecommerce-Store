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
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Dropdown />
          <Home />
          <Footer />
        </Route>
        exact
        <Route exact path='/shop'>
          <Navbar />
          <Dropdown />
          <Shop />
          <Footer />
        </Route>
        <Route
          exact
          path='/shop/:id'
          children={
            <>
              <Navbar />
              <Dropdown />
              <SingleProduct />
              <Footer />
            </>
          }
        />
        <Route exact path='/about'>
          <Navbar />
          <Dropdown />
          <About />
          <Footer />
        </Route>
        <Route exact path='/contact'>
          <Navbar />
          <Dropdown />
          <Contact />
          <Footer />
        </Route>
        <Route exact path='/card'>
          <Navbar />
          <Dropdown />
          <Cart />
          <Footer />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route path='*'>
          <Navbar />
          <Dropdown />
          <Error />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
