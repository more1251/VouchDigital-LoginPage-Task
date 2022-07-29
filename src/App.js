import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import { useEffect } from 'react';

function App() {

  const accessToken = sessionStorage.getItem("auth-token")? sessionStorage.getItem("auth-token") : null;

  const navigate = useNavigate();


  useEffect(() => {
    
    if (!accessToken) {
      navigate("/login")
    }
  }, [accessToken,navigate])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
