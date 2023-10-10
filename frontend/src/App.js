import './App.css';
import Router from './router/router';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {updateCartFromLocalStorage} from "./store/cartAction";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    dispatch(updateCartFromLocalStorage(cartItems));
  }, [dispatch]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
