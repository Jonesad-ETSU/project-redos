import styles from "./User.module.css";
const User = (props) => {
  const removeHandler = () => {
    props.onRemove();
  };
  return (
    <section className={styles.container}>
      <span className={styles.info}>
        <h2>{props.name}</h2>
        <em>{props.age}</em> years old.
      </span>
      <span className={styles.button}>
        <button onClick={removeHandler}>X</button>
      </span>
    </section>
  );
};

export default User;
