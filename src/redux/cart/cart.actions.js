export const toggleCart = cart => ({
  type: 'TOGGLE_CART',
  payload: cart
});

export const addItem = item => ({
  type: 'ADD_ITEM',
  payload: item
});

export const deleteItem = item => ({
  type: 'DELETE_ITEM',
  payload: item
});

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  payload: item
});
