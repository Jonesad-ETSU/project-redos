import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import styles from "../css/HeaderCartButton.module.css";
import CartIcon from "./UI/CartIcon";

const HeaderCartButton = props => {
  const ctx = useContext(CartContext);
  const cartCount = ctx.items.reduce((prev, item) => item.amount + prev, 0);
  const toggleCartHandler = () => {
    props.toggle();
    console.log(ctx.items);
  };

  return (
    <button className={`${styles.button} ${styles.bump}`} onClick={toggleCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <p>Your Cart</p>
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export default HeaderCartButton;
