import { useRef } from "react";
import Card from "./UI/Card";

import styles from "./UserAdd.module.css";

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

    props.onAddUser({ name, age });

    inputAge.current.value = "";
    userName.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <section className={styles.container}>
          <section className={styles.input}>
            <section>
              <label>Username </label>
              <input ref={userName} type="string" />
            </section>
            <section>
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
