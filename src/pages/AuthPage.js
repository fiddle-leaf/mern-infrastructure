import SignupForm from "../components/SignupForm";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignupForm setUser={setUser} />
    </main>
  );
}
