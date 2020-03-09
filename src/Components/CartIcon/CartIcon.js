import React from 'react';
import { ReactComponent as ShoppingCard } from '../../assets/shopping-bag.svg';
import './cardicon.scss';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import { countSelector } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingCard className="shopping-card" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    itemCount: countSelector(state)
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCart: cart => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
