import { Link, useRouteError } from "react-router-dom";
import "../styles/error.css";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>
        Oops! {err.status}, Page {err.statusText}
      </h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="error-page__link">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
