import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <LoginForm setUser={setUser} />
      <SignupForm setUser={setUser} />
    </main>
  );
}
