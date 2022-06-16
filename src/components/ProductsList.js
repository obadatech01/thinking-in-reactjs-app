import React from 'react';

const ProductsList = (props) => {
  return (
    <div className='products-list'>
        <div className='row bolder'>
          <p>Name</p>
          <p>Price</p>
        </div> 
        {props.products.map(product => (
          <div className='row' key={product.name}>
           <p className={product.stocked ? '' : 'stocked'}>{product.name}</p>
           <p>{product.price}</p>
          </div>
        ))}
    </div>
  )
}

export default ProductsList;