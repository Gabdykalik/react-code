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