import React from 'react';
import Chatbot from '../../components/Chatbot/Chatbot';
import { useLanguage } from '../../contexts/LanguageContext';
import './StrokeResponse.css';

const StrokeResponse = () => {
  const { t } = useLanguage();
  const steps = [
    {
      icon: 'qr_code',
      title: t('stroke.steps.qr.title'),
      description: t('stroke.steps.qr.description')
    },
    {
      icon: 'scanner',
      title: t('stroke.steps.scan.title'),
      description: t('stroke.steps.scan.description')
    },
    {
      icon: 'timer',
      title: t('stroke.steps.goldenHour.title'),
      description: t('stroke.steps.goldenHour.description')
    }
  ];

  const emergencyCardData = {
    name: t('stroke.card.name'),
    dob: t('stroke.card.dob'),
    bloodType: t('stroke.card.bloodType'),
    emergencyContact: t('stroke.card.emergencyContact'),
    medicalConditions: t('stroke.card.medicalConditions'),
    medications: t('stroke.card.medications'),
    allergies: t('stroke.card.allergies')
  };

  const benefits = [
    t('stroke.benefits.benefit1'),
    t('stroke.benefits.benefit2'),
    t('stroke.benefits.benefit3'),
    t('stroke.benefits.benefit4'),
    t('stroke.benefits.benefit5')
  ];

  return (
    <div className="stroke-response-page">
      {/* Hero Section */}
      <section className="stroke-hero">
        <div className="container">
          <h1>{t('stroke.heroTitle')}</h1>
          <p className="subtitle">{t('stroke.heroSubtitle')}</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="text-center">{t('stroke.howItWorks')}</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  {step.icon === 'qr_code' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H13V13H17V15H19V13H17V11M3,15H5V19H3V15M15,19V17H17V19H15M19,19H15V21H19V19M3,19H5V21H3V19Z" />
                    </svg>
                  )}
                  {step.icon === 'scanner' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M4.2,10.7L19.8,5L20.5,6.9L6.4,12H19A2,2 0 0,1 21,14V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7M17,17H19V15H17V17M5,17H15V15H5V17Z" />
                    </svg>
                  )}
                  {step.icon === 'timer' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M15,1H9V3H15V1M12,6C8.13,6 5,9.13 5,13A7,7 0 0,0 12,20A7,7 0 0,0 19,13C19,9.13 15.87,6 12,6M14,14.59L10.67,11.26L11.34,10.6L13.59,12.85L17.25,9.19L17.92,9.86L14,14.59Z" />
                    </svg>
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Card Preview */}
      <section className="emergency-card-preview section bg-light">
        <div className="container">
          <div className="card-preview-content">
            <div className="card-preview-text">
              <h2>{t('stroke.card.title')}</h2>
              <p>{t('stroke.card.description')}</p>
              <ul className="card-features">
                {Object.entries(emergencyCardData).map(([key, label]) => (
                  <li key={key}>
                    <strong>{label}:</strong> Sample data
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-preview-visual">
              <div className="emergency-card">
                <div className="card-header">
                  <div className="medical-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M17,8H16V16H15V8H14V16H13V8H12V16H11V8H10V16H9V8H8V16H7V8H6V16H5V8H4V16H3V8H2V16H1V8H0V16H1V19H3V17H5V19H7V17H9V19H11V17H13V19H15V17H17V19H19V17H21V19H23V16H24V8H23V5H21V8H19V5H17V8Z" />
                    </svg>
                  </div>
                  <h3>{t('stroke.card.title')}</h3>
                </div>
                <div className="qr-code-placeholder">
                  <div className="qr-code">
                    <div className="qr-pattern"></div>
                    <div className="qr-text">{t('stroke.card.scan')}</div>
                  </div>
                </div>
                <div className="card-details">
                  <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">JANE DOE</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Date of Birth:</span>
                    <span className="detail-value">01/00/1960</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Blood Type:</span>
                    <span className="detail-value">A+</span>
                  </div>
                  <div className="emergency-notice">
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2L1,21H23M12,6L19.5,19.5H4.5M11,10V14H13V10M11,16V18H13V16" />
                    </svg>
                    <span>{t('stroke.card.notice')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <h2 className="text-center">{t('stroke.benefits.title')}</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>{t('stroke.cta.title')}</h2>
            <p>{t('stroke.cta.description')}</p>
            <div className="cta-buttons">
              <button className="btn btn-light">
                {t('stroke.cta.getQr')}
              </button>
              <button className="btn btn-outline-light">
                {t('stroke.cta.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="chatbot-section section">
        <div className="container">
          <h2 className="text-center">{t('stroke.chatbot.title')}</h2>
          <p className="text-center subtitle">{t('stroke.chatbot.description')}</p>
        </div>
      </section>

      <Chatbot />
    </div>
  );
};

export default StrokeResponse;
