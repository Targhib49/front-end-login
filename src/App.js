import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Dashboard from './pages/Dashboard';
import OTP from './pages/OTP';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verification" element={<OTP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
