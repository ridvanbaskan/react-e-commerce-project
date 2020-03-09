import React from 'react';
import StripeButton from '../StripeButton/StripeButton';
import CheckoutItem from './CheckoutItem';
import { connect } from 'react-redux';
import {
  selectCartTotal,
  selectCartItems
} from '../../redux/cart/cart.selectors';
import './Checkout.scss';

function Checkout({ totalCost, cartItems }) {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      <br />
      <hr />
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total-cost">
        <span>{`TOTAL: $ ${totalCost}`}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeButton price={totalCost} />
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  totalCost: selectCartTotal(state)
});

export default connect(mapStateToProps)(Checkout);
