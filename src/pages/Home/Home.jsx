import React from 'react';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Connecting Networks to Facilitate Faster Treatment</h1>
            <p>
              The MediCare Connect mobile app, supported by the MediCare Cloud, allows physicians to quickly and securely access, review and share images and patient data across a network, send messages, make calls directly from the app, and flag patients eligible for thrombectomy, all designed to optimize workflow, facilitating faster transfer and treatment decisions.
            </p>
            <Button variant="primary" size="large">Request a Demo</Button>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Placeholder for the floating phone images */}
          <div className="floating-images">
            <img src="/phone-1.jpeg" alt="App Screenshot 1" className="phone-image phone-1" />
            <img src="/phone-2.jpeg" alt="App Screenshot 2" className="phone-image phone-2" />
            <img src="/phone-3.jpeg" alt="App Screenshot 3" className="phone-image phone-3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
