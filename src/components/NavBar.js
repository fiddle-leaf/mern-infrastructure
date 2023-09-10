import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  console.log(user);
  return (
    <nav>
      <h1>Wecome, {user.name}</h1>
      <Link to="/vacations">Vacation History</Link>
      <Link to="/vacations/new">New Vacation Details</Link>
    </nav>
  );
}
