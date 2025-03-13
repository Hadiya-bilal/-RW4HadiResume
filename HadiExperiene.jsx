import React from 'react';
import './styles/HadiExperience.css';

const HadiExperience = ({ hadiExperience }) => {
  return (
    <section className="hadi-experience">
      <h2>Work Experience</h2>
      <ul>
        {hadiExperience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.company}</strong> - {exp.role} ({exp.duration})
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HadiExperience;