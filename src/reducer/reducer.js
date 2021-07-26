const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filter: { ...state.filter },
    };
  }

  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { all_products, filtered_products } = state;
    const { search, sort, category, price, brand } = state.filter;
    let tempProducts = [...all_products];
    if (search) {
      console.log(search);
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(search)
      );
    }
    //
    if (sort === 'Popularity') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.popularity - b.popularity;
      });
    }
    if (sort === 'Newness') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.newness - b.newness;
      });
    }
    if (sort === 'Price: Low to High') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === 'Price: High to Low') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
    }
    //
    //
    if (category === 'All') {
      tempProducts = [...all_products];
    }
    if (category === 'Woman') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (category === 'Men') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (category === 'Watches') {
      tempProducts = tempProducts.filter(
        (product) => product.acessory === category
      );
    }
    if (category === 'Sunglasses') {
      tempProducts = tempProducts.filter(
        (product) => product.acessory === category
      );
    }
    //
    //
    if (price === 'All') {
      console.log('All');
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    if (price === '$0.00 - $50.00') {
      console.log('$0.00 - $50.00');
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    if (price === '$50.00 - $100.00') {
      console.log('$50.00 - $100.00');
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    if (price === '$100.00 - $150.00') {
      console.log('$100.00 - $150.00');
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    if (price === '$150.00+') {
      console.log('$150.00+');
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    //
    //
    if (brand !== 'All') {
      tempProducts = tempProducts.filter(
        (product) => product.locality === locality
      );
    }
    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
