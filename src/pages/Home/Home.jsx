import React from 'react';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('home.heroTitle')}</h1>
            <p>{t('home.heroDescription')}</p>
            <Button variant="primary" size="large">{t('home.requestDemo')}</Button>
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
