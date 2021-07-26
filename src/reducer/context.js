import React, { useContext, useEffect, useReducer, useState } from 'react';
import { FeaturedProdutsData } from '../data/FeaturedProducts';
import reducer from './reducer';

const initialState = {
  filtered_products: [],
  all_products: [],
  filter: {
    search: '',
    sort: 'Popularity',
    category: 'All',
    price: 'All',
    brand: 'All',
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: FeaturedProdutsData });
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  }, [state.filter]);

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
        updateFilters,
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
