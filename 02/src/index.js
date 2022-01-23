import ReactDOM from "react-dom";
import CartProvider from "./store/CartContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
