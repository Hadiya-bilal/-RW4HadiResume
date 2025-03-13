import React from 'react';
import './styles/HadiLanguages.css';

const HadiLanguages = ({ hadiLanguages }) => {
  return (
    <section className="hadi-languages">
      <h2>Languages</h2>
      <ul>
        {hadiLanguages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </section>
  );
};

export default HadiLanguages;