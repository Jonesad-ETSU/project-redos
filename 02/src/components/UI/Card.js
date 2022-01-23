import styles from "../../css/Card.module.css";
const Card = (props) => <div className={styles.card}>{props.children}</div>;
export default Card;
