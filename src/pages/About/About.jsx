import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    { name: 'Mariiam Raiimzhanova', key: 'mariiam' },
    { name: 'Ahn Yeji', key: 'yeji' },
    { name: 'Asanova Gulbarchyn', key: 'gulbarchyn' },
    { name: 'Baktybekova Aiym', key: 'aiym' },
    { name: 'Kim Baekson', key: 'baekson' },
    { name: 'Jang Eunkyo', key: 'eunkyo' },
  ];

  const values = [
    { key: 'innovation', icon: '💡' },
    { key: 'compassion', icon: '❤️' },
    { key: 'integrity', icon: '🛡️' },
    { key: 'excellence', icon: '⭐' },
    { key: 'accessibility', icon: '🌍' },
    { key: 'collaboration', icon: '🤝' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="about-page">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h1>{t('about.heroTitle')}</h1>
          <p className="subtitle">{t('about.heroSubtitle')}</p>
        </div>
      </motion.section>

      <section className="about-mission section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-text">
              <h2>{t('about.missionTitle')}</h2>
              <p>{t('about.missionDescription')}</p>
              <p className="mission-detail">{t('about.missionDetail')}</p>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-icon">🏥</div>
                <h3>{t('about.missionCard.title')}</h3>
                <p>{t('about.missionCard.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{t('about.teamTitle')}</h2>
            <p className="section-subtitle">{t('about.teamDescription')}</p>
          </motion.div>
          
          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.key}
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="team-avatar">
                  <div className="avatar-initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="role">{t(`about.team.${member.key}.role`)}</p>
                <p className="bio">{t(`about.team.${member.key}.bio`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{t('about.valuesTitle')}</h2>
            <p className="section-subtitle">{t('about.valuesDescription')}</p>
          </motion.div>
          
          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="value-icon-wrapper">
                  <div className="value-icon">{value.icon}</div>
                </div>
                <h3>{t(`about.values.${value.key}.title`)}</h3>
                <p>{t(`about.values.${value.key}.description`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
