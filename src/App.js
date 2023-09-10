import logo from "./logo.svg";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import VacationHistory from "./pages/VacationHistory";
import NewVacation from "./pages/NewVacation";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            {/* Route components in here */}
            <Route path="/vacations/new" element={<NewVacation />} />
            <Route path="/vacations" element={<VacationHistory />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
