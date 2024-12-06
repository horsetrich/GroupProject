import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import CakesList from './pages/cake-list';
import Register from './pages/register';
import Login from './pages/login';
import CakeDetails from './pages/cake-details';

function App() {

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return token && username ? { username } : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  }

  return (
    <>
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #FFD1DC, #FFFACD)' }}>
        <div className="container-fluid">
          <Link className='navbar-brand' to="/" style={{ color: '#d68a7d', fontSize: '30px', fontWeight: 'normal'}}>Find Your Cake!</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className='nav-link' to="/" style={{ color: '#d68a7d' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/about"style={{ color: '#d68a7d' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/services" style={{ color: '#d68a7d' }}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/cake" style={{ color: '#d68a7d' }}>Cakes</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to="/contact" style={{ color: '#d68a7d' }}>Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {user ? (
                <>
                  <li className="nav-item">
                  <span className="navbar-text mr-3" style={{ color: '#d68a7d' }}>Welcome, {user.username}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ): (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" style={{ color: '#d68a7d' }}>Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" style={{ color: '#d68a7d' }}>Login</Link>
                  </li>
                </>
              )}
              
            </ul>
          </div>
          </div>
        </nav>
      </div>


      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/services" element = {<Services />} />
        <Route path="/cake" element = { <CakesList />} />
        <Route path="/cake-details" element = { <CakeDetails />} />
        <Route path="/cake-details/:id" element = { <CakeDetails />} />
        <Route path="/register" element = { <Register />} />
        <Route path="/login" element = { <Login setUser={setUser} />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
