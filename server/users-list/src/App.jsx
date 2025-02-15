import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetch("http://localhost:5000/users");
        const users = await data.json();
        setUsers(users);
        console.log(users);
      } catch (e) {}
    }
    getUsers();
  }, []);

  return (
    <>
      <h1>Users list</h1>
      {users.map((user) => (
        <p key={user.username}>{user.username}</p>
      ))}
    </>
  );
}

export default App;
