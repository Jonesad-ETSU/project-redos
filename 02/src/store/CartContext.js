import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

/* Item: { name, description, amount, price } */
const reducerFn = (state, action) => {
  const newItems = [...state.items];
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      newItems[existingItemIndex] = updatedItem;
      const newTotalPrice =
        state.totalPrice + action.item.price * action.item.amount;
      return {
        items: newItems,
        totalPrice: newTotalPrice,
      };
    } else {
      newItems.push({
        name: action.item.name,
        amount: action.item.amount || 1,
        description: action.item.description,
        price: action.item.price,
      });
      const newTotalPrice =
        state.totalPrice + action.item.price * action.item.amount;
      return {
        items: newItems,
        totalPrice: newTotalPrice,
      };
    }
  }
  return state;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, { items: [], totalPrice: 0 });
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "DEL", id });
  };
  const cartContext = {
    items: state.items || [],
    totalPrice: state.totalPrice || 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
