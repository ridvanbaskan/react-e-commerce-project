export const addItemToCart = (cartItems, itemToAdd) => {
  const isCardExist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (isCardExist) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const isCardExist = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  if (isCardExist.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
