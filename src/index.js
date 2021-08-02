import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './reducer/cart_context';
import { FilterProvider } from './reducer/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-j-wrnkqo.us.auth0.com'
    clientId='JNsafLin6qBvF2exWLlh0GrXjxLodrSM'
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
