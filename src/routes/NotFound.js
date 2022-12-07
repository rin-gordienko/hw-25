import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Page not found</h2>
      <p>Oops, something went wrong</p>

      <Link to="/">Go to Home page</Link>
    </>
  );
};

export default NotFound;
