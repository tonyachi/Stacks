import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Incomes from './components/Incomes';
import './components/income.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Incomes" element={<Incomes />} />
      </Routes>
      <Navbar />
      <Sidebar />
      <Footer/>
    </div>
  );
}

export default App;
