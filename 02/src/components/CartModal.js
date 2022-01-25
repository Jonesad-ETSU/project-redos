import { createPortal } from "react-dom";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import styles from "../css/Modal.module.css";
import MealModal from "./MealModal";
import Card from "./UI/Card";

const Backdrop = (props) => {
  const toggleHandler = () => {
    props.toggle();
  };
  return <div className={styles.backdrop} onClick={toggleHandler} />;
};
const CartModal = (props) => {
  const ctx = useContext(CartContext);
  const { items, totalPrice } = ctx;
  const hasItems = items.length >= 1;
  return (
    <>
      {createPortal(
        <Backdrop toggle={props.toggleCart} />,
        document.getElementById("overlay-backdrop")
      )}
      {createPortal(
        <div className={styles.modal}>
          {hasItems && (
            <>
              <ul>
                {items.map((i) => (
                  <li>
                    <MealModal
                      name={i.name}
                      description={i.description}
                      price={i.price}
                      amount={i.amount}
                    />
                  </li>
                ))}
              </ul>
              <section className={styles.center}><h3>Your Total is: ${totalPrice.toFixed(2)}</h3></section>
            </>
          )}
          {!hasItems && (
            <div className={styles.center}>
              <button onClick={props.toggleCart}>Click to Exit</button>
            </div>
          )}
        </div>,
        document.getElementById("overlay-modal")
      )}
    </>
  );
};

export default CartModal;
