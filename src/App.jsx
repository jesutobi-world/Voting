import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Otp from './components/Otp';
import Reset from './components/Reset';
import Changed from './components/Changed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/changed" element={<Changed />} />
      </Routes>
    </Router>
  );
}

export default App;
