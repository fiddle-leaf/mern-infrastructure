import { useState } from "react";
import * as usersService from "../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      //users-service returns user obj
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed. Try again!");
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
