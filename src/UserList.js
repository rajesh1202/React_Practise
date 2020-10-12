import React from "react";
import usersData from "./mockup-data/users";

export default function UserList() {
  const [users, setUsers] = React.useState([...usersData]);
  const [filter, setFilter] = React.useState("");

  const onInputChange = (value = "") => {
    if (!value || !value.trim()) {
      setUsers([...usersData]);
      return true;
    }
    setFilter(value);
    const filterUsers = usersData.filter((user) => {
      return user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setUsers(filterUsers);
  };

  return (
    <section>
      <input
        onChange={(event) => onInputChange(event.target.value || "")}
        placeholder="Search Users"
      />

      <ul>
        {users.map((singleUser, index) => {
          return <li>{singleUser.name}</li>;
        })}
      </ul>
    </section>
  );
}
