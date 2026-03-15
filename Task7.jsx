import React, { useState, useEffect, useCallback, useMemo } from "react";

function Task7() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  // Fetch users function
  const fetchUsers = useCallback(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.log(err);
      });

    // cleanup
    return () => {
      controller.abort();
      console.log("Fetch aborted / cleanup ran");
    };
  }, []);

  // run on mount + when filter changes
  useEffect(() => {
    const cleanup = fetchUsers();
    return cleanup;
  }, [fetchUsers, filter]);

  // expensive calculation
  const avgNameLength = useMemo(() => {
    if (users.length === 0) return 0;
    let total = users.reduce((sum, u) => sum + u.name.length, 0);
    return (total / users.length).toFixed(2);
  }, [users]);

  // filtered users
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>

      <input
        placeholder="Search name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      <p>Average name length: {avgNameLength}</p>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task7;