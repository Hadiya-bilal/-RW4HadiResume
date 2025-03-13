import React from 'react';
import './styles/HadiEducation.css';

const HadiEducation = ({ hadiEducation }) => {
  return (
    <section className="hadi-education">
      <h2>Education</h2>
      <ul>
        {hadiEducation.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HadiEducation;