import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

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
              <td><button onClick={() => navigate(`/users/${id}`)}>Show more</button></td>
            </tr>
        </table>
      ))}
    </>
  );
};


export default Users
