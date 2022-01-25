import { useRef, useContext } from "react";
import { CartContext } from "../store/CartContext";
import styles from "../css/MealModal.module.css";
const MealModal = (props) => {
  const ctx = useContext(CartContext);
  const submitHandler = (evt) => {
    evt.preventDefault();
    ctx.removeItem({
      name: props.name,
      amount: mealInputRef.current.value,
    });
    mealInputRef.current.value = '1';
  };
  const mealInputRef = useRef();
  return (
    <section className={styles.container}>
      <section className={styles.info}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <em>
          ${props.price} x {props.amount} ={" "}
          ${(props.amount * props.price).toFixed(2)}
        </em>
      </section>
      <form onSubmit={submitHandler}>
        <section className={styles.form}>
          <label htmlFor="remove">How many?</label>
          <input
            id="remove"
            ref={mealInputRef}
            type="number"
            min="0"
            max="20"
            step="1"
            defaultValue="1"
          />
          <button>Remove Items</button>
        </section>
      </form>
    </section>
  );
};
export default MealModal;
