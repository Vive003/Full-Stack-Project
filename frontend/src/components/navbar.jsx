import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../styles/DarkModeContext';


export default function Navbar({events, searchText, setSearchText}) {
const { darkMode, toggleDarkMode } = useDarkMode();

  // Applica o rimuove classe sul body quando cambia darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      document.body.classList.remove('bg-white', 'text-dark');
    } else {
      document.body.classList.add('bg-white', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  const uniqueProvinces = Array.from(
    new Set(events.map(event => event.provincia).filter(Boolean))
  );

  return (
    <nav className={`navbar navbar-expand-md sticky-top py-2 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand p-0 m-0">
          <img
            src="./logo.png"
            alt="Logo"
            className="img-fluid d-block align-middle"
            style={{ maxWidth: "50px", height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {/* Search bar */}
            <li className="nav-item d-flex align-items-center me-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search events"
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ minWidth: '200px' }}
              />
            </li>

            {/* Dropdown Località */}
            <li className="nav-item d-flex align-items-center me-2 dropdown">
              <a
  className={`nav-link dropdown-toggle ${darkMode ? 'text-light' : 'text-dark'}`}
  href="#"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Località
</a>

              <ul className="dropdown-menu">
                {uniqueProvinces.length === 0 && (
                  <li>
                    <span className="dropdown-item text-muted">Nessuna provincia</span>
                  </li>
                )}
                {uniqueProvinces.map((provincia) => (
                  <li key={provincia}>
                    <Link className="dropdown-item" to={`/province/${provincia}`}>
                      {provincia}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Favorite icon */}
           <li className="nav-item d-flex align-items-center me-2">
  <Link to="/favorites" className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`}>
    <i className="bi bi-heart h3" />
  </Link>
</li>

            {/* Dark mode toggle */}
<li className="nav-item d-flex align-items-center me-2">
  <button
    onClick={toggleDarkMode}
    className={`btn nav-link ${darkMode ? 'text-light' : 'text-dark'}`}
    style={{ background: 'none', border: 'none', padding: 0 }}
    aria-label="Toggle dark mode"
  >
    <i className={`bi h3 ${darkMode ? 'bi-moon-fill' : 'bi-moon'}`} />
  </button>
</li>

            {/* FAQ */}
              <li className="nav-item d-flex align-items-center me-2">
  <a href="#FAQ" className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`}>
    <i className="bi bi-question-lg h3" />
  </a>
</li>


            {/* User profile dropdown */}
            <li className="nav-item dropdown">
              <a
  className={`nav-link dropdown-toggle ${darkMode ? 'text-light' : 'text-dark'}`}
  href="#"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  <i className="bi bi-person h3" />
</a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register-choice">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Your profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Your Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/favorites">
                    Your Favorites
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
