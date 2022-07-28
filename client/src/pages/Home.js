import React from "react";
import { Provider } from "react-redux";
import store from "../../src/store";
import Board from "../components/Board";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Board />
      </Provider>,
      <Cart />
    </div>
  );
};

export default Home;
