import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>navigation</h1>
      <Link to="/vacations">Vacation History</Link>
      <Link to="/vacations/new">New Vacation Details</Link>
    </nav>
  );
}
