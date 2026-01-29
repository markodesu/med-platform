import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'qr_code',
      title: 'Digital Medical Card',
      description: 'Access your medical records anytime, anywhere with a secure QR code'
    },
    {
      icon: 'ai',
      title: 'AI Symptom Analysis',
      description: 'Get preliminary health insights using our AI-powered symptom checker'
    },
    {
      icon: 'security',
      title: 'Secure Data Storage',
      description: 'Your medical data is encrypted and stored with the highest security standards'
    },
    {
      icon: 'video_call',
      title: 'Online Doctor Consultation',
      description: 'Connect with healthcare professionals from the comfort of your home'
    },
    {
      icon: 'emergency',
      title: 'Rapid Stroke Response',
      description: 'Immediate emergency information for stroke patients through QR codes'
    }
  ];

  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="container">
          <h1>Our Features</h1>
          <p className="subtitle">
            Discover how our platform can help you manage your health better
          </p>
        </div>
      </section>

      <section className="features-grid-section section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
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
                  {feature.icon === 'security' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.16,21.74 12,23C17.84,21.74 21,16.55 21,11V5L12,1M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7M17,16.5C17,15 15.5,14 14,14H10C8.5,14 7,15 7,16.5V18H17V16.5Z" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section bg-light">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>
              Join thousands of users who trust us with their healthcare needs.
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">
                Sign Up Now
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
