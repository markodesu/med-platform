import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './Features.css';

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: 'qr_code',
      image: '/WhatsApp Image 2026-01-29 at 15.48.53.jpeg',
      title: t('features.qrMedicalPass.title'),
      description: t('features.qrMedicalPass.description')
    },
    {
      icon: 'ai',
      image: '/WhatsApp Image 2026-01-29 at 15.48.53 (1).jpeg',
      title: t('features.aiDiagnostic.title'),
      description: t('features.aiDiagnostic.description')
    },
    {
      icon: 'emergency',
      image: '/WhatsApp Image 2026-01-29 at 15.48.53 (2).jpeg',
      title: t('features.oneTouchSOS.title'),
      description: t('features.oneTouchSOS.description')
    },
    {
      icon: 'monitoring',
      image: '/WhatsApp Image 2026-01-29 at 15.48.54.jpeg',
      title: t('features.everywhereMonitoring.title'),
      description: t('features.everywhereMonitoring.description')
    },
    {
      icon: 'video_call',
      image: '/WhatsApp Image 2026-01-29 at 15.48.53.jpeg',
      title: t('features.smartConsultation.title'),
      description: t('features.smartConsultation.description')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="container">
          <h1>{t('features.heroTitle')}</h1>
          <p className="subtitle">
            {t('features.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="features-grid-section section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="feature-image-container">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                </div>
                <div className={`feature-icon ${feature.icon}`}>
                  {feature.icon === 'qr_code' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H13V13H17V15H19V13H17V11M3,15H5V19H3V15M15,19V17H17V19H15M19,19H15V21H19V19M3,19H5V21H3V19Z" />
                    </svg>
                  )}
                  {feature.icon === 'ai' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5M16,14V16H8V14H16Z" />
                    </svg>
                  )}
                  {feature.icon === 'monitoring' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  )}
                  {feature.icon === 'video_call' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
                    </svg>
                  )}
                  {feature.icon === 'emergency' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2L1,21H23M12,6L19.5,19.5H4.5M12,10V16M12,16H12.01M13,13H11V16H13V13Z" />
                    </svg>
                  )}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('features.cta.title')}</h2>
            <p>
              {t('features.cta.description')}
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">
                {t('features.cta.signUp')}
              </a>
              <a href="/contact" className="btn btn-outline">
                {t('features.cta.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
