import { useRef } from "react";
import Card from "./UI/Card";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userName = useRef();
  const inputAge = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = userName.current.value;
    const age = inputAge.current.value;

    if (name.length === 0) {
      alert("Please Enter a name.");
      return;
    }

    if (!age) {
      alert("Please Enter an age.");
      return;
    }

    props.onAddUser({ name, age, id: Math.random() });

    inputAge.current.value = "";
    userName.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <section className={styles.container}>
          <section className={styles["input-container"]}>
            <section className={styles.input}>
              <label>Username </label>
              <input ref={userName} type="string" />
            </section>
            <section className={styles.input}>
              <label>Age (Years) </label>
              <input ref={inputAge} type="number" min="0" max="120" />
            </section>
          </section>
          <button type="submit">Add User</button>
        </section>
      </form>
    </Card>
  );
};

export default AddUser;
