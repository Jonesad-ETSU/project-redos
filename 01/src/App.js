import { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  const removeUserHandler = (id) => {
    setUsers((prev) => prev.filter((x) => x.id !== id));
  };
  
  return (
    <div className="gap">
      <AddUser onAddUser={addUserHandler} />
      <Users users={users} onRemove={removeUserHandler} />
    </div>
  );
}

export default App;
