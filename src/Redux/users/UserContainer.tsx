
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./UserActions";
import type { RootState } from "../Store";

interface UserContainerProps {
  userData: {
    loading: boolean;
    users: any[];
    error: string;
  };
  fetchUsers: () => void;
}

function UserContainer({ userData, fetchUsers }: UserContainerProps) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>

      {userData.loading && <p>Loading users...</p>}
      {userData.error && <p style={{ color: "red" }}>{userData.error}</p>}

      {!userData.loading && userData.users.length > 0 && (
        <ul>
          {userData.users.map((user: any) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
