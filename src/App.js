import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Topic from './pages/Topic';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path='/list' element={<Topic/>} />
      </Routes>
      {/* </div> */}
    </Router>
    
  );
}

export default App;
