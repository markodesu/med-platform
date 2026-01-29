import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#00C2CC"/>
              <path d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8ZM16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22Z" fill="white"/>
            </svg>
            <span className="logo-text">{t('app.title')}</span>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {t('navigation.home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                {t('navigation.features')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {t('navigation.about')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                {t('navigation.contact')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stroke-response" className="nav-link">
                {t('navigation.strokeResponse')}
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <Button variant="primary" size="small">
            {t('navigation.subscribe')}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
