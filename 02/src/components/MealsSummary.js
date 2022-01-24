import styles from "../css/MealsSummary.module.css";
import Card from "./UI/Card";
const MealsSummary = () => {
  return (
    <div className={styles.summary}>
      <Card>
        <h2>Testing</h2>
        <p>
          Our food is great...
          <br /> Thank you <br />
          Love you
        </p>
      </Card>
    </div>
  );
};
export default MealsSummary;
