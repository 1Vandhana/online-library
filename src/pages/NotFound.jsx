import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>No match for: {location.pathname}</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
