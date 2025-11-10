import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./UserSlice";

function UserContainer() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
      {users.map((id) => (
        <li key={id}>User ID: {users.id}</li>
      ))}
    </ul>
  );
}

export default UserContainer;
