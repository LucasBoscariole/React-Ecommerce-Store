import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './reducer/cart_context';
import { FilterProvider } from './reducer/context';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
