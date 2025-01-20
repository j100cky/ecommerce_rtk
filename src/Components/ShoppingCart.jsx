import React from 'react';
import './ShoppingCart.css'; 
import {useDispatch, useSelector} from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       
      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
