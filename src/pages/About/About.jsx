import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t('about.heroTitle')}</h1>
          <p className="subtitle">{t('about.heroSubtitle')}</p>
        </div>
      </section>

      <section className="about-mission section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>{t('about.missionTitle')}</h2>
              <p>{t('about.missionDescription')}</p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#f0f7ff" rx="10"/>
                  <path d="M100 100H300V200H100V100Z" fill="#d0e3ff" stroke="#4a90e2" strokeWidth="2"/>
                  <circle cx="200" cy="150" r="80" fill="#4a90e2" fillOpacity="0.1" stroke="#4a90e2" strokeWidth="2"/>
                  <path d="M150 120H250V180H150V120Z" fill="#4a90e2" fillOpacity="0.3"/>
                  <path d="M170 140H230V160H170V140Z" fill="white"/>
                  <text x="200" y="250" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#666">Our Mission</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section bg-light">
        <div className="container">
          <h2 className="text-center">{t('about.teamTitle')}</h2>
          <p className="text-center max-w-3xl mx-auto">{t('about.teamDescription')}</p>
          
          <div className="team-grid">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="team-card">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="40" r="20" fill="#d0e3ff"/>
                      <circle cx="50" cy="120" r="50" fill="#d0e3ff"/>
                    </svg>
                  </div>
                </div>
                <h3>{t(`about.team.member${member}.name`)}</h3>
                <p className="role">{t(`about.team.member${member}.role`)}</p>
                <p className="bio">{t(`about.team.member${member}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <h2 className="text-center">{t('about.valuesTitle')}</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">{t('about.valuesDescription')}</p>
          
          <div className="values-grid">
            {[
              { 
                title: 'Innovation',
                desc: 'We embrace cutting-edge technology to solve healthcare challenges.'
              },
              { 
                title: 'Compassion',
                desc: 'We treat every patient with empathy, respect, and kindness.'
              },
              { 
                title: 'Integrity',
                desc: 'We maintain the highest ethical standards in all our actions.'
              },
              { 
                title: 'Excellence',
                desc: 'We are committed to delivering the highest quality care and service.'
              },
              { 
                title: 'Accessibility',
                desc: 'We believe healthcare should be available to everyone, everywhere.'
              },
              { 
                title: 'Collaboration',
                desc: 'We work together with healthcare providers and patients for better outcomes.'
              },
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <div className="icon-circle">
                    <span>{index + 1}</span>
                  </div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
