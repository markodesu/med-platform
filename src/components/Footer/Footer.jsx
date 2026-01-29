import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footer.aboutUs')}</h3>
          <p>{t('footer.aboutDescription')}</p>
        </div>
        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><a href="/#features">{t('navigation.features')}</a></li>
            <li><a href="/about">{t('navigation.about')}</a></li>
            <li><a href="/contact">{t('navigation.contact')}</a></li>
            <li><a href="/privacy">{t('footer.privacy')}</a></li>
            <li><a href="/terms">{t('footer.terms')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('footer.contactUs')}</h3>
          <p>{t('contact.comingSoonMessage')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {t('app.title')}. {t('footer.rights')}.</p>
      </div>
    </footer>
  );
};

export default Footer;
