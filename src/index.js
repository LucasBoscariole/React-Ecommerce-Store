import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './reducer/cart_context';
import { FilterProvider } from './reducer/context';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = process.env.REACT_APP_DOMAIN;
const ID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
