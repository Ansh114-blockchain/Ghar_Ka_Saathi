import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Ghar Ka Saathi</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <footer className="footer">
        <h3>Careers - Become a Service Partner</h3>
        <p>Earn more with flexible work and verified customer leads.</p>
        <ul>
          <li>House Cleaner Partner</li>
          <li>Home Tutor Partner</li>
          <li>Electrician Partner</li>
          <li>Driver Partner</li>
        </ul>
      </footer>
    </div>
  );
}
