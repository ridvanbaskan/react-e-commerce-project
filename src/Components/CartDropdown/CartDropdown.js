import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import CustomButton from '../CustomButton';
import CartItem from '../cartItem/cartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './CartDropdown.scss';

function CartDropdown({ cartItems, history, toggleCart }) {
  return (
    <div className="cart-dropdown">
      <div className="dropdown-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-cart">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCart();
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCart: cart => dispatch(toggleCart())
});

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
