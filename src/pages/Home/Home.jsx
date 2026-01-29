import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import './Home.css';

const heroContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const screenshotsContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const screenshotItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      <motion.section
        className="hero-section"
        variants={heroContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="hero-content">
          <motion.div className="hero-text" variants={heroTextVariants}>
            <h1>
              {t('home.heroTitle').split('\\n').map((line, i) => {
                // Split line and highlight key words
                const parts = line.split(/(\bwait\b|\bwon't hurt\b|\bdoesn't hurt\b|\btoo late\b)/gi);
                return (
                  <span key={i}>
                    {parts.map((part, idx) => 
                      /^(wait|won't hurt|doesn't hurt|too late)$/i.test(part) ? (
                        <span key={idx} style={{ color: '#FF6B6B' }}>{part}</span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                    {i < t('home.heroTitle').split('\\n').length - 1 && <br />}
                  </span>
                );
              })}
            </h1>
            <p>{t('home.heroDescription')}</p>
            <Button variant="primary" size="large">{t('home.subscribe')}</Button>
          </motion.div>
          <motion.div className="hero-image-container" variants={heroImageVariants}>
            <div className="floating-images">
              <motion.img
                src="/WhatsApp Image 2026-01-29 at 15.48.53.jpeg"
                alt="Primary app screenshot"
                className="phone-image phone-hero"
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.03, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="screenshots-section"
        variants={screenshotsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="screenshots-title">{t('home.screenshotsTitle')}</h2>
            <p className="screenshots-subtitle">{t('home.screenshotsSubtitle')}</p>
          </motion.div>
          <div className="screenshots-grid">
            <motion.div
              className="screenshot-card"
              variants={screenshotItemVariants}
              whileHover={{ y: -6 }}
            >
              <motion.img
                src="/WhatsApp Image 2026-01-29 at 15.48.53 (1).jpeg"
                alt={t('home.screenshot1.alt')}
                className="screenshot-image"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
              <div className="screenshot-content">
                <h3>{t('home.screenshot1.title')}</h3>
                <p>{t('home.screenshot1.description')}</p>
              </div>
            </motion.div>
            <motion.div
              className="screenshot-card"
              variants={screenshotItemVariants}
              whileHover={{ y: -6 }}
            >
              <motion.img
                src="/WhatsApp Image 2026-01-29 at 15.48.53 (2).jpeg"
                alt={t('home.screenshot2.alt')}
                className="screenshot-image"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
              <div className="screenshot-content">
                <h3>{t('home.screenshot2.title')}</h3>
                <p>{t('home.screenshot2.description')}</p>
              </div>
            </motion.div>
            <motion.div
              className="screenshot-card"
              variants={screenshotItemVariants}
              whileHover={{ y: -6 }}
            >
              <motion.img
                src="/WhatsApp Image 2026-01-29 at 15.48.54.jpeg"
                alt={t('home.screenshot3.alt')}
                className="screenshot-image"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
              <div className="screenshot-content">
                <h3>{t('home.screenshot3.title')}</h3>
                <p>{t('home.screenshot3.description')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
