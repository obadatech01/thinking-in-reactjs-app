import React from 'react'

const SearchProducts = (props) => {
  const searchProductsHandler = async (e) => {
    const filterData = await props.products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if(e.target.value == '') return props.setProducts(props.items);
    props.setProducts(filterData);
  };

  const filterProductsHandler = async (e) => {
    const filterData = await props.products.filter(product => product.stocked === false);
    if(!e.target.checked) return props.setProducts(props.items);
    props.setProducts(filterData);
  };

  return (
    <form className='search-box'>
      <input type='text' placeholder='Search...' onChange={searchProductsHandler}  />
      <div>
        <input type='checkbox' onChange={filterProductsHandler} />
        <label>Only show products in stock</label>
      </div>
    </form>
  )
}

export default SearchProducts;