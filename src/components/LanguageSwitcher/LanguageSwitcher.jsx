import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ky', name: 'Кыргызча' },
    { code: 'ko', name: '한국어' },
  ];

  return (
    <div className="language-switcher">
      <select value={language} onChange={e => setLanguage(e.target.value)} className="language-select">
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
