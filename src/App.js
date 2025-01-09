import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'; // Import de Navigate
import { FaProjectDiagram, FaCertificate, FaEnvelope, FaHome, FaCog, FaPen } from 'react-icons/fa';  // Importation de FaPen pour le blog
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importer les pages
import Home from './component/Home';
import Contact from './component/Contact';
import Certifications from './component/Certifications';
import Competances from './component/Competances';
import Projects from './component/Projects';
import Blog from './component/Blog'; // Assurez-vous d'avoir cette page

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="portfolio-title">
        <Link to="/home">Portfolio</Link>
      </div>
      <div className="App">
        <div className="icons-container">
          <div className="icon-item">
            <Link to="/home">
              <FaHome size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/projects">
              <FaProjectDiagram size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/certifications">
              <FaCertificate size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/competances">
              <FaCog size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/contact">
              <FaEnvelope size={30} />
            </Link>
          </div>
          {/* Ajout de l'icône du blog */}
          <div className="icon-item">
            <Link to="/blog">
              <FaPen size={30} />
            </Link>
          </div>
        </div>

        {/* Configuration des routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/competances" element={<Competances />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Redirection par défaut pour la racine */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>

        <p className="copyright">© 2025 Omar Elloumi. Tous droits réservés.</p>
      </div>
    </Router>
  );
}

export default App;
