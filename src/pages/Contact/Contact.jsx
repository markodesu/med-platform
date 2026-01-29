import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h1>{t('contact.heroTitle')}</h1>
          <p className="subtitle">{t('contact.heroSubtitle')}</p>
        </div>
      </motion.section>

      <section className="contact-content section">
        <div className="container">
          <motion.div
            className="coming-soon-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="coming-soon-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </div>
            <h2>{t('contact.comingSoonTitle')}</h2>
            <p className="coming-soon-message">{t('contact.comingSoonMessage')}</p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <div className="feature-icon">📧</div>
                <span>{t('contact.featureEmail')}</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📞</div>
                <span>{t('contact.featurePhone')}</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <span>{t('contact.featureAddress')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
