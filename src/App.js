
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Service from './Components/Service';
import Feedback from './Components/Feedback';
import Faqs from './Components/Faqs';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark height-navbar">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">🌿 GardenHub</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/feedback">Feedback</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/faqs">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <Link to="/">Home</Link> &nbsp;
        <Link to="/service">Service</Link> &nbsp;
        <Link to="/feedback">Feedback</Link> &nbsp;
        <Link to="/faqs">Faqs</Link> */}

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
