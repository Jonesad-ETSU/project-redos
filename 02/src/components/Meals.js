import Meal from "./Meal";
import Card from "./UI/Card";
import styles from "../css/AvailableMeals.module.css";
const Meals = (props) => {
  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          <li>
            {props.meals.map((m) => (
              <Meal
                key={m.id}
                name={m.name}
                price={m.price}
                description={m.description}
              />
            ))}
          </li>
        </ul>
      </Card>
    </div>
  );
};
export default Meals;
