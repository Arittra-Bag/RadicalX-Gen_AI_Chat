import React, { useEffect, useState } from "react";
import './App.css';

import Navbar from './components/NavBar/NavBar';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Chat from "./components/Chat/Chat";
import { AuthProvider } from './components/Authentication/AuthContext';

import { BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import {auth} from "./components/Authentication/firebase";

function App() {

  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    
    <div className="App"> 
      <AuthProvider>
      <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tryit" element={<Chat name={userName} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer/> */}
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
