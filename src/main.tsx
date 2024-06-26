import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import the Router component
import './index.css'
import NavbarComponent from './Navbar';
import AboutMe from './AboutMe';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
 <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <NavbarComponent />
    </Router>
  </React.StrictMode>,
)


