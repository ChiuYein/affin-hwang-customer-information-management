//React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
import RegistrationForm from "./components/registrationForm";
import LoginForm from "./components/loginForm";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
