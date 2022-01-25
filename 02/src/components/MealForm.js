import styles from "../css/MealItemForm.module.css";
import { useRef, useState } from "react";
const MealForm = (props) => {
  const mealInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +mealInputRef.current.value;
    if (!amount || amount > 20 || amount < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddItem(amount);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <section className={styles["controls"]}>
        <section className={styles["controls-left"]}>
          <label htmlFor="add">How many?</label>
          <input
            id="add"
            ref={mealInputRef}
            type="number"
            min="0"
            max="20"
            step="1"
            defaultValue="1"
          />
        </section>
        <button>+ Add Item</button>
        {!amountIsValid && <p>Please Enter a valid amount.</p>}
      </section>
    </form>
  );
};

export default MealForm;
