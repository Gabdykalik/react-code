export const addToCart = (productId, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      productId,
      quantity, // Передаем количество товаров
    },
  };
};

export const updateCartFromLocalStorage = (cartItems) => {
  return {
    type: 'UPDATE_CART_FROM_LOCAL_STORAGE',
    payload: cartItems,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};