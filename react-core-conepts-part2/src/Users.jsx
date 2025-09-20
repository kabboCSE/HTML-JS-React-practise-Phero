import { use } from "react";
import "./App.css";
const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  console.log(users);

  return (
    <div className="borderd">
      <h3>Users: </h3>
    </div>
  );
};
export default Users;
