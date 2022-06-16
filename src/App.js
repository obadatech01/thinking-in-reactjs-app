import { useState } from 'react';
import ProductsList from './components/ProductsList';
import SearchProducts from './components/SearchProducts';

const App = () => {
  const items = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  const [products, setProducts] = useState(items);
  
  return (
    <div className="App">
      <div className="container">
        <SearchProducts products={products} items={items} setProducts={setProducts} />
        <ProductsList products={products} />
      </div>
    </div>
  );
}

export default App;
