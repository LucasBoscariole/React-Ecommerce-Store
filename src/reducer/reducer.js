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
    } else {
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
    }
    //
    //
    if (category === 'All') {
      tempProducts = [...all_products];
    } else {
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
    }
    //
    //
    if (price === 'All') {
      tempProducts = tempProducts.filter((product) => product.price >= 0);
    } else {
      if (price === '$0.00 - $50.00') {
        tempProducts = tempProducts.filter(
          (product) => 50000 > product.price >= 0
        );
      }
      if (price === '$50.00 - $100.00') {
        tempProducts = tempProducts.filter(
          (product) => 100000 > product.price >= 50000
        );
      }
      if (price === '$100.00 - $150.00') {
        tempProducts = tempProducts.filter(
          (product) => 150000 > product.price >= 100000
        );
      }
      if (price === '$150.00+') {
        tempProducts = tempProducts.filter(
          (product) => product.price >= 150000
        );
      }
    }
    //
    //
    if (brand === 'All') {
      tempProducts = [...all_products];
    } else {
      if (brand === 'Furia') {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }
      if (brand === 'Astralis') {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }
      if (brand === 'SK') {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }
      if (brand === 'Immortals') {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }
    }
    console.log(tempProducts);
    return { ...state, filtered_products: tempProducts };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
