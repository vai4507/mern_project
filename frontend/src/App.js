import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {  Route, Routes,Link } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
        <Link to="/">Login</Link>
        <Link to="/signup">Sign Up</Link>
        
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </ Routes>
    </>
  );
}

export default App;
