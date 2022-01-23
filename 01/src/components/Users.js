import Card from "./UI/Card";
import User from "./User";

import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>Users List</h1>
        {props.users.map((user) => (
          <User key={user.age} name={user.name} age={user.age} />
        ))}
      </div>
    </Card>
  );
};

export default Users;
