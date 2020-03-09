import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const countSelector = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumVal, cartItem) => accumVal + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumVal, cartItem) => accumVal + cartItem.quantity * cartItem.price,
    0
  )
);
