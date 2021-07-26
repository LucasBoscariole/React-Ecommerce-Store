import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FilterProvider } from './reducer/context';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
