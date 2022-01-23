import styles from "../css/MealItem.module.css";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import MealForm from "./MealForm";

const Meal = (props) => {

  const ctx = useContext(CartContext);
  const addItemHandler = (amount) => {
    const { name, price, description } = props;
    ctx.addItem({ name, price, description, amount });
  };
  
  return (
    <div className={styles.meal}>
      <section>
        <h3>{props.name}</h3>
        <section className={styles.description}>{props.description}</section>
        <section className={styles.price}>{props.price}</section>
      </section>
      <MealForm onAddItem={addItemHandler} />
    </div>
  );
};

export default Meal;
