import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User ID: {id}</h2>

      <button onClick={() => navigate("/users")}>
        Back to Users
      </button>

    </div>
  );
}

export default UserDetails;