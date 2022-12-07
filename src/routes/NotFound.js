import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>The page doesn't exist</h2>
      <p>Oops, sth went wrong</p>

      <Link to="/">Go to Home page</Link>
    </>
  );
};

export default NotFound;
