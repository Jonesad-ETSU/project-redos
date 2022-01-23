import { createPortal } from "react-dom";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import styles from "../css/Modal.module.css";
import MealModal from "./MealModal";
import Card from "./UI/Card";

const Backdrop = (props) => {
    const toggleHandler = () => {props.toggle()};
    return <div className={styles.backdrop} onClick={toggleHandler}/>
};
const CartModal = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;
  return (
    <>
      {createPortal(<Backdrop toggle={props.toggleCart}/>, document.getElementById("overlay-backdrop"))}
      {createPortal(
        <div className={styles.modal}>
          <Card>
            {items.map((i) => (
              <MealModal
                name={i.name}
                description={i.description}
                price={i.price}
                amount={i.amount}
              />
            ))}
          </Card>
        </div>,
        document.getElementById("overlay-modal")
      )}
    </>
  );
};

export default CartModal;
