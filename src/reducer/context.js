import React, { useContext, useEffect, useReducer, useState } from 'react';
import { ProductsData } from '../data/ProductsData';
import reducer from './reducer';

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'Popularity',
  filter: {
    search: '',
    category: 'All',
    price: 'All',
    brand: 'All',
  },
  signin: false,
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: ProductsData });
  }, []);
  //
  //
  //
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [state.sort, state.filter]);
  //
  //
  //
  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.textContent;
    dispatch({ type: 'UPDATE_SORT', payload: { name, value } });
  };
  //
  //
  //
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'sort') {
      value = e.target.textContent;
    }
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = e.target.textContent;
    }
    if (name === 'brand') {
      value = e.target.textContent;
    }

    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };
  //
  //
  //
  const signIn = () => {
    dispatch({ type: 'SIGN_IN' });
  };
  //
  //
  //
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
  };
  // Toggle Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // Toggle Menu

  return (
    <FilterContext.Provider
      value={{
        ...state,
        toggle,
        isOpen,
        updateSort,
        updateFilters,
        signIn,
        logOut,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
