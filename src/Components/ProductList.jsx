import React from 'react';
import './ProductList.css'; 
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { addItemToCart } from './CartSlice';

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  // implement the functionality to add the data to the cart and send 
  // the data directly in store.js using useDispatch hook.
  const dispatch = useDispatch();
  // State to store disabled products
  const [disabledProducts, setDisabledProducts] = useState([]); 

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    // Mark the product as disabled
    setDisabledProducts([...disabledProducts, product.id]);
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
            <li key={product.id} className='product-list-item'>
                <span>{product.name} - ${product.price}</span>
            <button 
                // The button's appearance is dynamically determined by whether 
                // the product is included in the disabledProducts array, which 
                // disables the button if the product is in the array or if the 
                // product is added.
                className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                // Disable button if product is in disabledProducts
                disabled={disabledProducts.includes(product.id)}
                >
                Add to Cart
            </button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
