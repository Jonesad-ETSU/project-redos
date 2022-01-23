import { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prevUsers) => {
      return [ ...prevUsers, user ]
    });
  };
  return (
    <div className="gap">
      <AddUser onAddUser={addUserHandler}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
