import React from 'react';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>MediCare Connect</h1>
          <p className="hero-description">Your digital healthcare companion</p>
          <div className="cta-buttons">
            <Button size="large" className="cta-button">
              Get Started
            </Button>
            <Button variant="outline" size="large" className="cta-button">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image */}
          <div className="image-placeholder">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f0f7ff" rx="10"/>
              <path d="M100 100H300V200H100V100Z" fill="#d0e3ff" stroke="#4a90e2" strokeWidth="2"/>
              <circle cx="200" cy="150" r="30" fill="#4a90e2" fillOpacity="0.2" stroke="#4a90e2" strokeWidth="2"/>
              <path d="M200 130L210 150H200V170L190 150H200V130Z" fill="#4a90e2"/>
              <text x="200" y="250" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#666">Medical Illustration</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
            </div>
            <h3>Digital Medical Card</h3>
            <p>Access your medical records anytime, anywhere with a secure QR code</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>AI Symptom Analysis</h3>
            <p>Get preliminary health insights using our AI-powered symptom checker</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Secure Data Storage</h3>
            <p>Your medical data is encrypted and stored with the highest security standards</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Online Doctor Consultation</h3>
            <p>Connect with healthcare professionals from the comfort of your home</p>
          </div>
        </div>
      </section>

      <section className="digital-card-section">
        <div className="container">
          <div className="card-showcase">
            <div className="card-image">
              {/* Placeholder for card image */}
              <div className="image-placeholder-card">
                <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="400" fill="#f0f7ff" rx="20"/>
                  <rect x="20" y="20" width="260" height="50" fill="#4a90e2" rx="10"/>
                  <text x="150" y="55" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="white">MediCare Connect</text>
                  <rect x="20" y="90" width="80" height="80" fill="#d0e3ff" rx="10"/>
                  <text x="60" y="130" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#333">PHOTO</text>
                  <rect x="120" y="90" width="160" height="20" fill="#e8f1fc" rx="5"/>
                  <rect x="120" y="120" width="160" height="20" fill="#e8f1fc" rx="5"/>
                  <rect x="120" y="150" width="160" height="20" fill="#e8f1fc" rx="5"/>
                  <rect x="20" y="190" width="260" height="100" fill="#e8f1fc" rx="10"/>
                  <text x="150" y="240" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#666">Lorem ipsum dolor sit amet...</text>
                  <rect x="20" y="310" width="260" height="70" fill="#4a90e2" rx="10"/>
                  <text x="150" y="350" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="white">www.medicareconnect.kg</text>
                </svg>
              </div>
            </div>
            <div className="card-info">
              <h2>Digital Medical Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
