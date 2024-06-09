
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './component/Register';
import Login from './component/login';
import Header from './component/header';
import Footer from './component/footer';
import LandingPage from './component/landing';
function App() {
  return (
    <div className="">
     <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
