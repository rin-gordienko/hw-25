import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {users.map(({ id, firstName, lastName, email, phone }) => (
        <table>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <Link to={`${id}`}>Show more</Link>
            </tr>


        </table>
      ))}
    </>
  );
};

export default Users;
