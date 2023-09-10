import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import VacationHistory from "./pages/VacationHistory";
import NewVacation from "./pages/NewVacation";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/vacations/new" element={<NewVacation />} />
            <Route path="/vacations" element={<VacationHistory />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
