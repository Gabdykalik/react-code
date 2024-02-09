import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer, // Здесь перечислите ваши редьюсеры и их ключи
  // Другие редьюсеры, если есть
});

export default rootReducer;