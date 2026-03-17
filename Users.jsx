import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h2>Users List</h2>

      <Link to="/users/1">User 1</Link><br/>
      <Link to="/users/2">User 2</Link><br/>
      <Link to="/users/3">User 3</Link>

    </div>
  );
}

export default Users;