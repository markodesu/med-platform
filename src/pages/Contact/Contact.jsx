import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.heroTitle')}</h1>
          <p className="subtitle">{t('contact.heroSubtitle')}</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{t('contact.infoTitle')}</h2>
              <p>{t('contact.infoDescription')}</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>{t('contact.address')}</h4>
                  <p>{t('contact.addressValue')}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>{t('contact.phone')}</h4>
                  <p>{t('contact.phoneValue')}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>{t('contact.email')}</h4>
                  <p>{t('contact.emailValue')}</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>{t('contact.formTitle')}</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder={t('contact.form.namePlaceholder')}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder={t('contact.form.emailPlaceholder')}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder={t('contact.form.subjectPlaceholder')}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.6643271581996!2d74.589277!3d42.874621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9f7a2f3b5a5%3A0x1c3e0d5e2c6b8b8d!2sBishkek%2C%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
