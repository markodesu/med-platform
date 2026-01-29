import React from 'react';
import Chatbot from '../../components/Chatbot/Chatbot';
import { useLanguage } from '../../contexts/LanguageContext';
import './StrokeResponse.css';

// Add these styles to StrokeResponse.css:
// .hero-features {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
//   margin-top: 3rem;
// }
// 
// .feature-card {
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: transform 0.3s ease;
// }
// 
// .feature-card:hover {
//   transform: translateY(-5px);
// }
// 
// .feature-icon {
//   background: #f0f7ff;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 1.5rem;
// }
// 
// .feature-icon svg {
//   width: 30px;
//   height: 30px;
//   fill: #1a73e8;
// }
// 
// .feature-card h3 {
//   color: #1a73e8;
//   margin-bottom: 1rem;
//   font-size: 1.25rem;
// }
// 
// .feature-card p {
//   color: #5f6368;
//   line-height: 1.6;
//   margin: 0;
// }

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

  // Stroke Card Data Structure
  const strokeCardData = {
    card: {
      name: t('stroke.card.name'),
      dob: t('stroke.card.dob'),
      bloodType: t('stroke.card.bloodType'),
      emergencyContact: t('stroke.card.emergencyContact'),
      medicalConditions: t('stroke.card.medicalConditions'),
      medications: t('stroke.card.medications'),
      allergies: t('stroke.card.allergies')
    },
    sample: {
      name: t('stroke.card.sample.name', 'John Doe'),
      dob: t('stroke.card.sample.dob', '01/01/1980'),
      bloodType: t('stroke.card.sample.bloodType', 'O+'),
      emergencyContact: t('stroke.card.sample.emergencyContact', 'Jane Doe (Spouse) - +1 (555) 123-4567'),
      medicalConditions: t('stroke.card.sample.medicalConditions', 'Hypertension, Atrial Fibrillation'),
      medications: t('stroke.card.sample.medications', 'Warfarin, Lisinopril, Metoprolol'),
      allergies: t('stroke.card.sample.allergies', 'Penicillin, Latex')
    }
  };
  
  // For backward compatibility
  const emergencyCardData = strokeCardData.card;

  const benefits = [
    t('stroke.benefits.benefit1'),
    t('stroke.benefits.benefit2'),
    t('stroke.benefits.benefit3'),
    t('stroke.benefits.benefit4'),
    t('stroke.benefits.benefit5')
  ];

  const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);

  return (
    <div className="stroke-response-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Emergency Medical ID<br />For Stroke Response</h1>
            <p className="subtitle">Immediate access to vital medical information during critical moments</p>
            <div className="hero-cta">
              <button className="btn btn-primary">
                {t('stroke.cta.getQR', 'Get Your QR Code')}
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => {
                  const element = document.getElementById('emergency-card-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('stroke.cta.learnMore', 'Learn More')}
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="qr-preview">
                  <div className="qr-placeholder"></div>
                  <p>Emergency Medical ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Essential for Stroke Response</h2>
            <p className="subtitle">Critical medical information when every second counts</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2L1,21H23M12,6L19.5,19.5H4.5M11,10V14H13V10M11,16V18H13V16" />
                </svg>
              </div>
              <h3>Immediate Access</h3>
              <p>Vital medical information instantly available to emergency teams</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2L2,7V12.1C2,14.4 3,16.6 4.8,17.9L12,23L19.2,17.9C21,16.6 22,14.4 22,12.1V7L12,2M16,14.1C16,15.2 15.2,16 14.1,16C13,16 12.1,15.2 12.1,14.1C12.1,13 13,12.1 14,12.1V8H16V14.1Z" />
                </svg>
              </div>
              <h3>Works Offline</h3>
              <p>Accessible without internet connection when it matters most</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.16,21.74 12,23C17.84,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.8V11C15.4,11 16,11.6 16,12.3V15.7C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.4C8,11.7 8.6,11.1 9.2,11.1V9.8C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.8V11H13.5V9.8C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <h3>Secure & HIPAA-Compliant</h3>
              <p>Your sensitive health data remains private and protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="emergency-card-section" className="emergency-card-preview section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>How It Saves Lives</h2>
            <p className="subtitle">Rapid access to critical medical information during emergencies</p>
          </div>
          
          <div className="card-preview-content">
            <div className="card-preview-text">
              <h3>Your Lifesaving Medical Profile</h3>
              <p>During a medical emergency, every second counts. Your QR code provides instant access to critical health information that can make all the difference in your treatment and recovery.</p>
              
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>1. Scan the QR Code</h4>
                    <p>Emergency teams can quickly scan using any smartphone camera or medical scanner</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>2. Access Vital Medical Data</h4>
                    <p>Immediate access to medical history, current medications, allergies, and emergency contacts</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>3. Enable Faster Treatment</h4>
                    <p>Critical decisions made faster with immediate access to your complete medical profile</p>
                  </div>
                </div>
              </div>
              
              <div className="emergency-card-preview">
                <h4>Your Medical Information Includes</h4>
                <div className="card-sample">
                  <ul className="card-features">
                    {Object.entries(emergencyCardData).map(([key, label]) => (
                      <li key={key}>
                        <strong>{label}:</strong> {strokeCardData.sample[key] || 'N/A'}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

      <div className={`chatbot-container ${isChatbotOpen ? 'open' : ''}`}>
        <button 
          className="chatbot-toggle"
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        >
          {isChatbotOpen ? '×' : '💬'}
        </button>
        {isChatbotOpen && <Chatbot />}
      </div>
    </div>
  );
};

export default StrokeResponse;
