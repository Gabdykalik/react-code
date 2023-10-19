const initialState = {
  items: {}, // Теперь будем хранить товары в виде { productId: quantity }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const {productId, quantity} = action.payload;
      // Проверяем, есть ли уже такой товар в корзине
      const updatedItems = {
        ...state.items,
        [productId]: quantity,
      };

      // Обновляем Redux состояние
      const newState = {
        ...state,
        items: updatedItems,
      };

      // Обновляем localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return newState;

    case 'UPDATE_CART_FROM_LOCAL_STORAGE':
      return {
        ...state,
        items: action.payload,
      };

    case 'REMOVE_FROM_CART':
      const removedProductId = action.payload;
      const updatedItemsCopy = { ...state.items };
      delete updatedItemsCopy[removedProductId];
      localStorage.setItem('cartItems', JSON.stringify(updatedItemsCopy));
      return {
        ...state,
        items: updatedItemsCopy,
      };

    // Другие case...
    default:
      return state;
  }
};

export default cartReducer;

