import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={styles.card}
      style={props.bgColor ? { backgroundColor: props.bgColor } : {}}
    >
      {props.children}
    </div>
  );
};

export default Card;
