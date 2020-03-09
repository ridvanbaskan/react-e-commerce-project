import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import './CheckoutItem.scss';

function CheckoutItem({ cartItem, deleteItem, addItem, removeItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="item-block">{name}</span>
      <span className="item-block quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="item-block">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
