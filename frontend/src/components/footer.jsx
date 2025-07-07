import { useDarkMode } from '../styles/DarkModeContext'; // Assicurati che il path sia corretto

//TODO: change the footer text
export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`p-5 text-center position-relative ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <div className="container">
        {/* Footer Sections */}
        <div className="row">
          {/* Left Column: Social Media and Website Name */}
          <div className="col-md-4 mb-4">
            {/* Social Media Icons */}
            <div className="mb-3">
              {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((platform) => (
                <a
                  key={platform}
                  href={`https://www.${platform}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className={`me-3 ${darkMode ? 'text-light' : 'text-dark'}`}
                >
                  <i className={`bi bi-${platform} fs-4`} />
                </a>
              ))}
            </div>
            {/* Website Name */}
            <p className="lead">Events Website</p>
          </div>

          {/* Right Column: Information Sections */}
          <div className="col-md-8 mb-4">
            <div className="row">
              <div className="col-md-3">
                <h5>About Us</h5>
                <p>Vuoi sapere quali sono gli ultimi eventi?</p>
              </div>
              <div className="col-md-3">
                <h5>Categories</h5>
                <ul className="list-unstyled">
                  <li>Music</li>
                  <li>Sports</li>
                  <li>Conferences</li>
                  <li>Workshops</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Support</h5>
                <ul className="list-unstyled">
                  <li>FAQ</li>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Recent Events</h5>
                <ul className="list-unstyled">
                  <li>Summer Music Festival</li>
                  <li>Tech Conference 2025</li>
                  <li>Charity Sports Event</li>
                  <li>Photography Workshop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mb-0">Copyright © 2025 Events Website</p>

        {/* Scroll to Top */}
        <a href="#" className={`position-absolute bottom-0 end-0 p-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
          <i className="bi bi-arrow-up-circle-fill fs-3" />
        </a>
      </div>
    </footer>
  );
}
